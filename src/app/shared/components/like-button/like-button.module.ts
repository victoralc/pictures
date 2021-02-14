import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { LikeButtonComponent } from './like-button.component';

@NgModule({
    declarations: [LikeButtonComponent],
    imports: [CommonModule],
    exports: [LikeButtonComponent]
})
export class LikeButtonModule {

}