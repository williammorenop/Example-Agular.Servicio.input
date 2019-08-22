import { Component } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temp';
  persona: Person = new Person (123, 'kkk', 21);

  constructor(private personService: PersonService) { }
  recuperarDato() {
    this.persona = this.personService.findPerson(1);
  }

  cambiarpersona() {
    this.persona = new Person(123, 'Jose', 26);
  }
}
