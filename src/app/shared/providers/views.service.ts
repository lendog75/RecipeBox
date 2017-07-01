import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';


@Injectable()
export class ViewsService {
  constructor (private db: AngularFireDatabase) {
  }

  add (resourceId: string) {
    const ref = `/views/${resourceId}`;
    this.db.list(ref).push({value: true});
  }

  get (resourceId: string): Observable<any> {
    const path = `views/${resourceId}`;
    return this.db.object(path);
  }
}


