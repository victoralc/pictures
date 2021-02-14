import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LikeButtonModule } from 'src/app/shared/components/like-button/like-button.module';
import { ValidationMessageModule } from 'src/app/shared/components/validation-messages/validation.message.module';
import { PhotoLikedByUserDirective } from 'src/app/shared/directives/liked-by-user/liked-by-user.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotosModule } from '../photos.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { PhotoDetailsComponent } from './photo.details.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective,
        PhotoLikedByUserDirective
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
        ShowIfLoggedModule,
        MaterialModule,
        LikeButtonModule
    ]
})
export class PhotoDetailsModule {}