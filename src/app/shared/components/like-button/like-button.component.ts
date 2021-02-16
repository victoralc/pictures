import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from 'src/app/photos/photo/photo';
import { PhotoService } from 'src/app/photos/photo/photo.service';

@Component({
    selector: 'app-like-button',
    templateUrl: './like-button.component.html',
    styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit{

    @Input() photo: Photo;
    cssClass: string;

    constructor(
        private userService: UserService, 
        private photoService: PhotoService
    ){}

    ngOnInit() {
        this.userService.getUser()
            .pipe(switchMap((user) => this.photoService.photoLikedByUser(this.photo.id, user.id)))
            .subscribe(photoByUser => {
                if (photoByUser.isPhotoLiked) {
                    this.activateCssLike();
                }
            });
    }

    like(){
        this.photoService
            .like(this.photo.id)
            .subscribe(liked => {
                if (liked) {
                    this.activateCssLike()    
                }    
            });
    }

    activateCssLike(){
        this.cssClass = "mat-warn";
    }

}