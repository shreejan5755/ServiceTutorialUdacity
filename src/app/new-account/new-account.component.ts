import { AccountsService } from './../shared/accounts.service';
import { LoggingService } from './../shared/logging.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  // output proerty to get the event emitted from here to parent component
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private _loggingService: LoggingService , private _accountService: AccountsService) { }

  ngOnInit() {
  }

  onCreateAccount( accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this._accountService.addAccount( accountName, accountStatus);
    // this._loggingService.logStatusChnage(accountStatus);
  }

}
