import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseDialogService {

  @Output() emitSignupSuccess: EventEmitter<boolean> = new EventEmitter();

  closeSignupDialog() {
    this.emitSignupSuccess.emit(true);
  }
}
