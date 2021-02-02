import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo.comment';
import { PhotoService } from '../photo/photo.service';

import { faAmbulance, faComment, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

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
        private router: Router, 
        private alertService: AlertService){ }

    ngOnInit(){
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
        this.photo$.subscribe(() => {}, err => {
            console.log(err);
            this.router.navigate(['not-found']);
        });
    }

    removePhoto(){
        this.photoService.removePhoto(this.photoId)
            .subscribe(() => {
                this.alertService.success("Photo removed.", true)
                this.router.navigate(['']);                             
            },
            err => {
                console.log(err);
                this.alertService.warning('Could not delete photo.', true);
            });
    }

}