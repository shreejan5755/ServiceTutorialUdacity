import { AccountsService } from './../shared/accounts.service';
import { LoggingService } from './../shared/logging.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  constructor(private _loggingService: LoggingService , private _accountService: AccountsService) {
    // using service for cross componenet communication
    // getting the event emitted by the account component through the accountservice
    this._accountService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status));
  }

  ngOnInit() {
  }

  onCreateAccount( accountName: string, accountStatus: string) {
    this._accountService.addAccount( accountName, accountStatus);
  }

}
