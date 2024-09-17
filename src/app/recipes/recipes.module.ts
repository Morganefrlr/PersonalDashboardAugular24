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
import { RecipeTagsComponent } from './recipe-page/recipe-tags/recipe-tags.component';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { RecipeIngredientsComponent } from './recipe-page/recipe-ingredients/recipe-ingredients.component';
import { RecipesLikedComponent } from './recipes-liked/recipes-liked.component';



const recipesRoutes: Routes =[
  {path:'recipes', component: RecipesHomepageComponent, data: {tab: 4}},
  {path:'recipes/recipe/:id', component: RecipePageComponent},
  {path:'recipes/like', component: RecipesLikedComponent},

]

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeItemComponent,
    RecipePageComponent,
    RecipesHomepageComponent,
    RecipeTagsComponent,
    RecipeIngredientsComponent,
    RecipesLikedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes),
    HttpClientModule,
    FormsModule,
    SharedModuleModule
],
  providers: [
    RecipesService
  ]
})
export class RecipesModule { }
