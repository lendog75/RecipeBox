
export class Favorite {
  static fromJsonList (array): Favorite[] {
    return array.map(Favorite.fromJson);
  }

  static fromJson ({$value}): Favorite {
    return new Favorite($value);
  }

  constructor (public $value: string
  ) {}
}


