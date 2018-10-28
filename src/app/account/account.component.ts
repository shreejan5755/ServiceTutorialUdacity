import { AccountsService } from './../shared/accounts.service';
import { LoggingService } from './../shared/logging.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private _loggingService: LoggingService, private _accountService: AccountsService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this._accountService.updateStatus(this.id, status);
    // this._loggingService.logStatusChnage(status);
  }

}
