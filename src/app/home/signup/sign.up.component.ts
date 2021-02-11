import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from '../../shared/validators/lower.case.validator';
import { NewUser } from './new.user';
import { SignUpService } from './sign.up.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { userNamePassword } from './username-password.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './sign.up.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit{

    signUpForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder, 
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router) {}

    ngOnInit(){
        this.signUpForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    lowerCaseValidator,
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        }, {
            validator: userNamePassword
        }); 
    }

    signUp(){
        if (this.signUpForm.valid && ! this.signUpForm.pending) {
            const newUser = this.signUpForm.getRawValue() as NewUser;
            this.signUpService.signUp(newUser)
                .subscribe(() => {
                    this.router.navigate(['']);
                }, error => console.log(error));
        }
    }
}