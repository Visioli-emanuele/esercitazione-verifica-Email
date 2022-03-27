import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email.model';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  @Input() mail:Email = undefined!; 
  constructor() { }

  ngOnInit(): void {
  }

}
