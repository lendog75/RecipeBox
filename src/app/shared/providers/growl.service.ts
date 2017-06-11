import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from 'primeng/primeng';

@Injectable()
export class GrowlService {
  public messages: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor () {

  }

  add (severity: growlSeverity, summary: string, detail?: string) {
    const message: Message = {};
    message.summary = summary;
    message.detail = detail;
    message.severity = growlSeverity[severity];
    this.messages.next(message);
  }
}

export enum growlSeverity {
  success,
  info,
  warn,
  error
}
