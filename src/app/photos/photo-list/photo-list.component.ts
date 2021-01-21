import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  constructor(
    private photoService: PhotoService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("Fase OnInit do Component App Component");
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => {
        console.log(photos[1].description);
        this.photos = photos;
    });
  }
  

}
