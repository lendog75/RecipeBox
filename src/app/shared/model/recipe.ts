export class Recipe {
  static fromJsonList (array): Recipe[] {
    return array.map(Recipe.fromJson);
  }

  static fromJson ({
                     $key, title, subTitle, description, cookTime,
                     imagePath, serves, calories, rating
                   }): Recipe {
    return new Recipe(
      $key,
      title,
      subTitle,
      description,
      cookTime,
      imagePath,
      serves,
      calories,
      rating);
  }

  constructor (public $key: string,
               public title: string,
               public subTitle: string,
               public description: string,
               public  cookTime: string,
               public imagePath: string,
               public serves: number,
               public calories: number,
               public rating: number) {}
}



