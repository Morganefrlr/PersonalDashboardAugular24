import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './recipes.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { FormsModule } from '@angular/forms';
import { RecipesHomepageComponent } from './recipes-homepage/recipes-homepage.component';



const recipesRoutes: Routes =[
  {path:'recipes', component: RecipesHomepageComponent, data: {tab: 4}},
  {path:'recipes/:id', component: RecipePageComponent}
]

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeItemComponent,
    RecipePageComponent,
    RecipesHomepageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecipesService
  ]
})
export class RecipesModule { }
