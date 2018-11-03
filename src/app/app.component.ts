import { Component } from '@angular/core';
import { MessagesService } from '../app/services/messages.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airquality';
  constructor(public messageService: MessagesService) { 
    this.messageService.add('Message: Success~');
    this.messageService.add('Message: ~1~');
    this.messageService.add('Message: ~2~');
    this.messageService.add('Message: ~3~');
    this.messageService.add('Message: LATEST');

  }
}
