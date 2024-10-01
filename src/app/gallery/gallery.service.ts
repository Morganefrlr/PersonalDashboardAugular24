import { Injectable } from '@angular/core';
import { galleryImages, Img } from './galleryData';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  backgroundSelected : Img | any = galleryImages[0]
 

  constructor() { }

  selectBackground(id : number){
    this.backgroundSelected = galleryImages.find(el => el.id === id)
  }

  getBackgroundSelected(){
    return this.backgroundSelected
  }
}
