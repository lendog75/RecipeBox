export class RecipeDetail {

  static fromJson ({
                     $key, ingredients,
                     directions, otherStuff,  tips
                   }): RecipeDetail {
    return new RecipeDetail(
      $key,
      ingredients,
      directions,
      otherStuff,
      tips


    );
  }

  constructor (public $key: string,
               public ingredients: Ingredient[],
               public  directions: Direction[],
               public otherStuff: Stuff[],
               public tips: Tip[],
               ) {}
}



export class Ingredient  {
  amount: string;
  name: string;
  unit: string;
}

export class Direction {
  order: number;
  title: string;
  value: string;
}


export class Stuff {
  name: string;
}


export class Tip {
  value: string;
}
