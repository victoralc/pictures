import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../shared/components/validation-messages/validation.message.module';
import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [ReactiveFormsModule, CommonModule, ValidationMessageModule, RouterModule]
})
export class HomeModule {}