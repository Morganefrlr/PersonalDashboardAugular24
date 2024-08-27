import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';



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
  ]
})
export class RecipesModule { }
