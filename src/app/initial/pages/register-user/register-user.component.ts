import { Component, OnInit } from '@angular/core';
//i<mport { ApiPersonService } from 'C:/Users/USER/Documents/Uptc/10mo Semestre/dreams-style/src/app/services/api-person.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  data: any[] = [];
/*
  constructor(private apiPersonService: ApiPersonService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.apiPersonService.getUsers().subscribe(data => {
      this.data = data;
    })
  }
  */
}
