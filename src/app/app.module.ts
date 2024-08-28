import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import {  TodosModule } from './todos/todos.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { NotesModule } from './notes/notes.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { RecipesModule } from './recipes/recipes.module';




registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   //HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
    SharedModuleModule,
    TodosModule,
    NotesModule,
    BookmarksModule,
    BrowserAnimationsModule,
    RecipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
