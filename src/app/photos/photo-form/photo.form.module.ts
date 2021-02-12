import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from 'src/app/shared/components/validation-messages/validation.message.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate.click.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        PhotoModule,
        ReactiveFormsModule,
        FormsModule,
        ValidationMessageModule,
        RouterModule,
        ImmediateClickModule,
        MaterialModule
    ]
})
export class PhotoFormModule {}