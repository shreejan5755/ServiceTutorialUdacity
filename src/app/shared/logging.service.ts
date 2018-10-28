import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
    logStatusChnage(status: string) {
        console.log('Server status changed, new status: ' + status);
    }
}