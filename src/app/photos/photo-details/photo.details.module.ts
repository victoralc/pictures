import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValidationMessageModule } from 'src/app/shared/components/validation-messages/validation.message.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotosModule } from '../photos.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { PhotoDetailsComponent } from './photo.details.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
    ],
    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    imports: [CommonModule, 
        PhotoModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        RouterModule,
        FontAwesomeModule
    ]
})
export class PhotoDetailsModule {}