import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ViewsService {
  constructor (private db: AngularFireDatabase) {
  }

  add (resourceId: string) {
    console.log(resourceId)
    const ref = `/views/${resourceId}`;
    this.db.list(ref).push({value: true});
  }

  get (resourceId: string): Observable<any> {
    const path = `views/${resourceId}`;
    return this.db.object(path);
  }
}


