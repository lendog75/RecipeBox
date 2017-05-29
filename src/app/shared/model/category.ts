
export class Category {
  static fromJsonList (array): Category[] {
    return array.map(Category.fromJson);
  }

  static fromJson ({$key, title, shortTitle, description }): Category {
    return new Category($key,
                        title,
                        shortTitle,
                        description);
  }

  constructor (public key: string,
               public title: string,
               public shortTitle: string,
               public description: string
  ) {}
}



