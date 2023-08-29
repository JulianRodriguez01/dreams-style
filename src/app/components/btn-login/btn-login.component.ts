import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.scss']
})
export class BtnLoginComponent {

  @Input() textButton: string;

  constructor() {
    this.textButton = '';
  }
}
