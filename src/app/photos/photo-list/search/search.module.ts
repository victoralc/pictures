import { CommonModule, NgComponentOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, MaterialModule],
    exports: [SearchComponent]
})
export class SearchModule {}