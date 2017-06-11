import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/providers/auth.service';
import {Message} from 'primeng/primeng';
import { GrowlService } from './shared/providers/growl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  currentUser;
  msgs: Message[] = [];

  val: number;

  constructor (private authSvc: AuthService,
               private growlService: GrowlService) {}

  ngOnInit () {
    this.authSvc.user.subscribe(user => {
      this.currentUser = user;
    });


    this.growlService.messages.subscribe(msg => {
      if (msg) {
        this.msgs.push(msg);
      }
    });
  }
}
