import { Component } from '@angular/core';
import { galleryImages, Img } from './galleryData';

@Component({
  selector: 'app-gallery',
  template: `
  <div class="galleryMain container">

    <h2>Selectionnez votre fond d'écran</h2>
    <div class="containerImg">

      <img *ngFor="let img of gallery" src={{img.url}} alt="">
    </div>


  </div>
  `,
  styles: ``
})
export class GalleryComponent {

  gallery : Img[] = galleryImages

}
