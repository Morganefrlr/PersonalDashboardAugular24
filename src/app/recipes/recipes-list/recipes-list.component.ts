
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnChanges{

  
  @Input() recipeSearch: string = ''
  @Input() recipes : []

  constructor(private recipesService : RecipesService){}

  ngOnChanges(changes: SimpleChanges){
    this.getRecipesBySearch()
  }

  getRecipesBySearch(){
    this.recipesService.getRecipeBySearch(this.recipeSearch)
    .subscribe(res => this.recipes = res.meals)
  }
 


}
