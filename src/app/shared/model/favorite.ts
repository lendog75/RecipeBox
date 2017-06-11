
export class Favorite {
  static fromJsonList (array): Favorite[] {
    return array.map(Favorite.fromJson);
  }

  static fromJson ({$key, chefId }): Favorite {
    return new Favorite($key, chefId);
  }

  constructor (public key: string,
               public chefId: string
  ) {}
}


