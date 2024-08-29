import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './recipes.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';



const recipesRoutes: Routes =[
  {path:'recipes', component: RecipesListComponent, data: {tab: 4}}
]

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeItemComponent,
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
