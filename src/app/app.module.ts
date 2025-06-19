import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import {  TodosModule } from './todos/todos.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { NotesModule } from './notes/notes.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { RecipesModule } from './recipes/recipes.module';
import { MapModule } from './map/map.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery/gallery.service';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { HomepageComponent } from './homepage/homepage.component';






registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    GalleryComponent,
    BackgroundImageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModuleModule,
    TodosModule,
    NotesModule,
    BookmarksModule,
    BrowserAnimationsModule,
    RecipesModule,
    MapModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
