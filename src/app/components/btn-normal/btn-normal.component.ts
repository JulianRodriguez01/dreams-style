import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-normal',
  templateUrl: './btn-normal.component.html',
  styleUrls: ['./btn-normal.component.scss']
})
export class BtnNormalComponent {

  @Input() textButton: string;
  @Input() size: string;

  constructor() {
    this.textButton = '';
    this.size = '';
  }
}
