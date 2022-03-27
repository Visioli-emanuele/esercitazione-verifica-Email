import { Component } from '@angular/core';
import{Email} from "./email.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Esercitazione-Email';
  emails: Email[];
  constructor(){
    this.emails = [];
    }    
  addEmail(email: HTMLInputElement, object: HTMLInputElement, message: HTMLInputElement):boolean{
    this.emails.push(new Email(email.value, object.value, message.value));
    console.log(this.emails);
    email.value = '';
    object.value = '';
    message.value = '';
    return false;
  }

}
