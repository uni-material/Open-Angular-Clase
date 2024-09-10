import {Component, Input} from '@angular/core';
import {Developer} from "../../model/developer.entity";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  //PROPERTIES: otros componentes del exterior
  // signo ! significa que el valor se asignará luego
  @Input() firstName!: string;
  @Input() lastName!: string;

  get fullName(): string {
    let developer = new Developer(this.firstName, this.lastName);
    return developer.fullName
  }
}
