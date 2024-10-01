import { Component, OnInit} from '@angular/core';
import { Img } from '../gallery/galleryData';
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-background-image',
  template: `
    <img src={{background.url}} alt="" class="backgroundImage">
  `,
})
export class BackgroundImageComponent implements OnInit{

  background : Img | any

  constructor(private galleryService : GalleryService){}

  ngOnInit(): void {
    this.background = this.galleryService.getBackgroundSelected()

  }
}
