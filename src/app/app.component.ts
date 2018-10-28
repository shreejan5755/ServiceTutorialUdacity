import { AccountsService } from './shared/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor( private _accountService: AccountsService) {}

  // here accounts is a refrence type so using the _accountService.accounts we get access to the same account data
  ngOnInit() {
    this.accounts = this._accountService.accounts;
  }

}
