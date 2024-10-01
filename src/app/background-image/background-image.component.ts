import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Img } from '../gallery/galleryData';
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-background-image',
  template: `
    <img src={{background.url}} alt="" class="testImg">
  `,
  styles: ``
})
export class BackgroundImageComponent implements OnInit{

  background : Img | any

  constructor(private galleryService : GalleryService){}

  ngOnInit(): void {
    const getBackground = this.galleryService.getBackgroundSelected()
    this.background = JSON.parse(getBackground)
  }
}
