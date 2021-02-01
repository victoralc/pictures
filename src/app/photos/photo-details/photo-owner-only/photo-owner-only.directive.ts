import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from '../../photo/photo';

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() photo: Photo;

    constructor(
        private element: ElementRef,
        private userService: UserService,
        private renderer: Renderer2
        ){
    }

    ngOnInit(){
        this.userService.getUser()
            .subscribe(user => {
                if (!user || user.id != this.photo.userId) {
                    this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
                }
            })
    }

}