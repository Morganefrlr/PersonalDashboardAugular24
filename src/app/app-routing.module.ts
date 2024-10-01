import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery/gallery.component';





const routes: Routes = [
  {path:"gallery", component: GalleryComponent, data: {tab: 6}},

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
