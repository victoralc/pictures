import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/components/card/card.module';
import { SearchComponent } from './photo-list/search/search.component';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover.module';
import { SearchModule } from './photo-list/search/search.module';
import { HomeModule } from '../home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoFormModule } from './photo-form/photo.form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo.details.module';
import { PhotoListModule } from './photo-list/photo.list.module';
import { MaterialModule } from '../shared/material/material.module';
import { LikeButtonModule } from '../shared/components/like-button/like-button.module';

@NgModule({
    imports: [
        HttpClientModule, 
        CommonModule,
        CardModule,
        PhotoModule,
        PhotoDetailsModule,
        PhotoFormModule,
        PhotoListModule,
        DarkenOnHoverModule,
        SearchModule,
        HomeModule,
        MaterialModule
    ]
})
export class PhotosModule{}