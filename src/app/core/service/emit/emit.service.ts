import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() loggingOutput: EventEmitter<string> = new EventEmitter<string>();
  @Output() signupOutput: EventEmitter<string> = new EventEmitter<string>();
  @Output() refreshOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public login() {
    this.loggingOutput.emit();
  }

  public signup() {
    this.signupOutput.emit();
  }

  public refreshTable() {
    this.refreshOutput.emit(true);
  }
}
