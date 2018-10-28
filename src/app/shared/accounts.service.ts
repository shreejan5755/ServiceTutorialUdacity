import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {

  constructor(private _loggingService: LoggingService) { }

  accounts = [
    { name: 'Master Account', status: 'active'},
    { name: 'Test Account', status: 'inactive'},
    { name: 'Hidden Account', status: 'unknown'}
  ];

  // Using service for cross component communicaiton
  // Passing an event in one component to another through the service
  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this._loggingService.logStatusChnage(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this._loggingService.logStatusChnage(status);
  }

  
}
