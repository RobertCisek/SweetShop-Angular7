import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories () {
    debugger
    return this.db.list('/categories').valueChanges();
    // , {
    //   query: {
    //     orderByChild: 'name'
    //   }
    // }
    // );
  }
}
