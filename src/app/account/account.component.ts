import { AccountsService } from './../shared/accounts.service';
import { LoggingService } from './../shared/logging.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private _loggingService: LoggingService, private _accountService: AccountsService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this._accountService.updateStatus(this.id, status);
    // using service for cross componenet communication
    // emitting an event so that other component can catch it using a service
    this._accountService.statusUpdated.emit(status);
  }

}
