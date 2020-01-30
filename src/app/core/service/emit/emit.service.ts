import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() logingOutput: EventEmitter<string> = new EventEmitter<string>();

  @Output() signupOutput: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  login() {
    this.logingOutput.emit();
  }

  signup() {
    this.signupOutput.emit();
  }
}
