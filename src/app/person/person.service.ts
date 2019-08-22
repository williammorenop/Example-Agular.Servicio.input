import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

personDatabase = [
new Person(0, 'William', 21),
new Person(1, 'Johan', 21),
new Person(2, 'Pavlishi', 50)
];

  constructor() { }

  findPerson(id: number): Person {
    console.log(this.personDatabase);
        return this.personDatabase[id];
  }
}
