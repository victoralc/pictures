import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from 'src/app/shared/components/validation-messages/validation.message.module';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        RouterModule
    ]
})
export class PhotoFormModule {}