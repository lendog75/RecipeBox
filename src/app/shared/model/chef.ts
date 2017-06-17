
export class Chef {
  static fromJsonList (array): Chef[] {
    return array.map(Chef.fromJson);
  }

  static fromJson ({displayName, email, photoURL, uid }): Chef {
    return new Chef(displayName, email, photoURL, uid);
  }

  constructor (
    public displayName: string,
    public email: string,
    public photoURL: string,
    public uid: string,
  ) {}
}
