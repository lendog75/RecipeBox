import { Recipe } from '../../recipe/recipe';
export class Category {
  static fromJsonList (array): Category[] {
    return array.map(Category.fromJson);
  }

  static fromJson ({
                     $key, title, recipes
                   }): Category {
    return new Category(
      $key,
      title,
      recipes);
  }

  constructor (public $key: string,
               public title: string,
               public recipes: Recipe[]) {}
}



