import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Email } from '../email.model';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  @Input() mail:Email = undefined!;
  @HostBinding("class") cssColor="white";
  show= false;
  special= false;
  Espen(): boolean{
    this.show= !this.show
    this.special=!this.special
    return false;
  }
  especial(): boolean{
    if(this.cssColor == 'white')
      this.cssColor = 'yellow';
    else
      this.cssColor = 'white';

    return false;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
