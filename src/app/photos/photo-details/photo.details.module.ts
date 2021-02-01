import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from 'src/app/shared/components/validation-messages/validation.message.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotosModule } from '../photos.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo.details.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    imports: [CommonModule, 
        PhotoModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        RouterModule
    ]
})
export class PhotoDetailsModule {}