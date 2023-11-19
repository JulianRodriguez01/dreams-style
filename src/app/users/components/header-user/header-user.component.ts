import { Component } from '@angular/core';
import { ApiPersonService } from '../../../services/api-person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent {

  constructor(private apiPersonService: ApiPersonService) {}

  logout(): void {
    this.apiPersonService.logout();
  }
}
