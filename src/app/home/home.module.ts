import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../shared/components/validation-messages/validation.message.module';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/sign.up.component';

@NgModule({
    declarations: [SignInComponent, SignUpComponent, HomeComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule, 
        CommonModule,
        ValidationMessageModule, 
        RouterModule]
})
export class HomeModule {}