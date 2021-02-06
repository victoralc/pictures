import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { faListAlt, far } from '@fortawesome/free-regular-svg-icons';
import { faAlignCenter, faAlignJustify, faGripLines, faHamburger, faListOl, faThList } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    user$: Observable<User>;
    faBars = faAlignJustify;

    constructor(
        private userService: UserService, 
        private router: Router ) {

        this.user$ = userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

}