import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor(private router: Router) { }

  photoDetail(photoId: string){
    this.router.navigate(['/photos', photoId]);
  }

}
