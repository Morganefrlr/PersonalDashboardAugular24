import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: ``
})
export class RecipeItemComponent implements OnInit{


 @Input() recipe:any

  constructor(private router : Router){}
 ngOnInit() {
   console.log(this.recipe)
 }


  handleClick(){
    this.router.navigate(['/recipes/' + this.recipe.idMeal])
  }
}
