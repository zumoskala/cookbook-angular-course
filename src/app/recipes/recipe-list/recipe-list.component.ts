import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.wholesomeyum.com/wp-content/uploads/2019/07/wholesomeyum-how-to-roast-eggplant-oven-roasted-eggplant-slices-recipe-6-500x375.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
