import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { BackButtonComponent } from './back-button.component';

@NgModule({
    declarations: [BackButtonComponent],
    imports: [CommonModule, MaterialModule],
    exports: [BackButtonComponent]
})
export class BackButtonModule {

}