import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { PhotoService } from 'src/app/photos/photo/photo.service';

@Directive({
    selector: '[likedByCurrentUser]'
})
export class PhotoLikedByUserDirective implements OnInit {

    @Input() photoId: number;

    constructor(
        private element: ElementRef<any>, 
        private userService: UserService,
        private photoService: PhotoService,
        private renderer: Renderer2
    ) {}

    ngOnInit(){
        console.log("Buscando photo curtida ngOnInit");
        this.userService.getUser()
            .pipe(switchMap((user) => this.photoService.photoLikedByUser(this.photoId, user.id)))
            .subscribe(photoByUser => {
                console.log("Buscando photo curtida no subscribe");
                console.log(photoByUser.isPhotoLiked);
            });
    }

}