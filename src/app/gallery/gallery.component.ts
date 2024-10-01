import { Component, OnInit } from '@angular/core';
import { galleryImages, Img } from './galleryData';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  template: `
  <div class="galleryMain container">

    <h2>Selectionnez votre fond d'écran</h2>

    <div class="containerImg">
      <img *ngFor="let img of gallery" 
            src={{img.url}} alt="" 
            (click)="handleClick(img.id)" 
            [ngClass]="classSelected.id === img.id ? 'backSelected' :''"
      >
    </div>


  </div>
  `,
})
export class GalleryComponent implements OnInit{

  gallery : Img[] = galleryImages
  classSelected : Img
  
  constructor(private galleryService : GalleryService){}

  ngOnInit(): void {
    this.handle()
  }


  handleClick(id:number){
    this.galleryService.selectBackground(id)
  }

  handle(){
   this.classSelected = this.galleryService.getBackgroundSelected()
  
  }

}
