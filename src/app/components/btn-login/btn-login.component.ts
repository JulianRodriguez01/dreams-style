import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.scss']
})
export class BtnLoginComponent {

  @Input() textButton: string;

  constructor(private router: Router) {
    this.textButton = '';
  }

  redirigirLogin() {
    this.router.navigate(['/login']);
  }
}
