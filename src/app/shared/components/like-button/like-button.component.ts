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

    cssClass: string;

    constructor(
        private userService: UserService, 
        private photoService: PhotoService
    ){}

    ngOnInit() {
    }

    like(){
        
    }

}