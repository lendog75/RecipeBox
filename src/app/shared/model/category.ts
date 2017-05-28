
export class Category {
  static fromJsonList (array): Category[] {
    return array.map(Category.fromJson);
  }

  static fromJson ({$key, title}): Category {
    return new Category($key, title);
  }

  constructor (public $key: string,
               public title: string) {}
}



