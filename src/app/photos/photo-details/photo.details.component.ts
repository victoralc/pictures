import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo.comment';
import { PhotoService } from '../photo/photo.service';

import { faAmbulance, faComment, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({ 
    selector: 'app-photo-details',
    templateUrl: './photo.details.component.html',
    styleUrls: ['./photo.details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    photoId: number;

    faComment = faComment;
    faTrash = faTrash;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router){ }

    ngOnInit(){
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
    }

    removePhoto(){
        this.photoService.removePhoto(this.photoId)
            .subscribe(() => {
                this.router.navigate(['']);                             
            });
    }

}