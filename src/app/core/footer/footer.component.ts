import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer-add-button.component.scss']
})
export class FooterComponent implements OnInit {
    
    user$: Observable<User>;

    constructor(private router: Router, 
        private userService: UserService){}
    
    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }

    addPhoto(){
        this.router.navigate(['/photos/add']);
    }

}