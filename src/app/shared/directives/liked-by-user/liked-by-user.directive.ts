import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { PhotoService } from 'src/app/photos/photo/photo.service';

@Directive({
    selector: '[likedByCurrentUser]'
})
export class LikedByUser implements OnInit {

    constructor(
        private element: ElementRef<any>, 
        private userService: UserService,
        private photoService: PhotoService,
        private renderer: Renderer2
    ) {}

    ngOnInit(){
        this.userService.getUser()
            .pipe(switchMap(user => this.photoService.isLikedBy(photoId, user.id)))
            .subscribe(isLikedByUser => {
                isLikedByUser 
                    && this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
            });
    }

}