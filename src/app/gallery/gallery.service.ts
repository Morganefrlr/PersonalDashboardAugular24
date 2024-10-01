import { Injectable } from '@angular/core';
import { galleryImages, Img } from './galleryData';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  backgroundSelected : Img | any 

  constructor() { }

  selectBackground(id : number){
    this.backgroundSelected = galleryImages.find(el => el.id === id)
    localStorage.setItem('Background', JSON.stringify(this.backgroundSelected))
    window.location.reload()
  }

  getBackgroundSelected(){
    this.backgroundSelected = localStorage.getItem('Background')
    if(this.backgroundSelected === null) return this.backgroundSelected = galleryImages[0]
    else return JSON.parse(this.backgroundSelected)
    

  }


}
