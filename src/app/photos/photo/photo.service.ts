import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Photo } from './photo';
import { PhotoComment } from './photo.comment';
import { environment } from '../../../environments/environment';
import { PhotoLikedByUser } from './photo-liked-by-user';
import { PhotoLiked } from './photo-liked';

const API = environment.API_URL;

@Injectable({providedIn: 'root'})
export class PhotoService {

   constructor(private http: HttpClient) {}

   listFromUser(userName: string): Observable<Photo[]>{
      return this.http.get<Photo[]>(API + "/" + userName + "/photos");
   }

   listFromUserPaginated(userName: string, page: number): Observable<Photo[]>{
      const params = new HttpParams().append('page', page.toString());
      return this.http.get<Photo[]>(API + "/" + userName + "/photos", {params});
   }

   upload(description: string, allowComments: boolean, file: File) {

      const formData = new FormData();
      formData.append('description', description);
      formData.append('allowComments', allowComments ? "true": "false");
      formData.append('imageFile', file);

      return this.http.post(API + '/photos/upload', 
         formData, 
         {
            observe: 'events',
            reportProgress: true
         }
      );
   }

   findById(photoId: number){
      return this.http.get<Photo>(API + '/photos/' + photoId);
   }

   getComments(photoId: number) {
      return this.http.get<PhotoComment[]>(
         API + '/photos/' + photoId + '/comments');
   }

   addComment(photoId: number, comment: string){
      return this.http.post(API + '/photos/' + photoId + '/comments', {commentText: comment});
   }

   removePhoto(photoId: number){
      return this.http.delete(API + '/photos/' + photoId);
   }

   like(photoId: number) {
      return this.http
         .post(API + '/photos/' + photoId + '/like', {}, { observe: 'response'})
         .pipe(map(res => true))
         .pipe(catchError(error => {
            return error.status == '304' ? of(false) : throwError(error);
         }));
   }

   photoLikedByUser(photoId: number, userId: number): Observable<PhotoLiked>{
      return this.http.get<PhotoLiked>(API + '/photos/' + photoId + '/liked-by/user/' + userId);
  }

}