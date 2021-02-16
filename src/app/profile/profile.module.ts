import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ProfileComponent]
})
export class ProfileModule {

}