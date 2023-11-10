import { Component, OnInit  } from '@angular/core';
import { ApiPersonService } from '../../../services/api-person.service';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss']
})
export class LayoutUserComponent implements OnInit {

  constructor(private apiService: ApiPersonService) {}

  ngOnInit(): void {
    this.apiService.checkAuthentication();
    console.log("Autentificación: ", this.apiService.checkAuthentication());
  }
}
