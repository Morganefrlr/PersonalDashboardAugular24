import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './recipes.service';



const recipesRoutes: Routes =[
  {path:'recipes', component: RecipesListComponent, data: {tab: 4}}
]

@NgModule({
  declarations: [
    RecipesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes),
    HttpClientModule
  ],
  providers: [
    RecipesService
  ]
})
export class RecipesModule { }
