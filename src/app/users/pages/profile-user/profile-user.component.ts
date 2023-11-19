import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {

  data: any = { };
  public name_user = '';
  public last_name_user = '';
  public email_user = '';
  public password_user = '';
  public password_user_2 = '';

  constructor(private authService: AuthService, private route: ActivatedRoute){}

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const userInfoEmail = this.authService.getUserInfoFromToken(token);
      const userInfo = this.authService.getUserEmail(userInfoEmail.userEmail);
      if (userInfoEmail) {
        this.email_user = userInfoEmail.userEmail;
        this.updateValues(userInfoEmail.userEmail);
      } else {
        console.error('No se pudo obtener la información del usuario desde el token.');
      }
    } else {
      console.error('El token es nulo.');
    }
  }

  private updateValues(email: string): void {
    this.route.params.subscribe(params => {
      this.authService.getUserEmail(email).subscribe(
        persona => {
          this.name_user = persona.name_user;
          this.last_name_user = persona.lastname_user;
          this.password_user = persona.nombre;
        },
        error => {
          console.error('Error al obtener la persona:', error);
        }
      );
    });
  }

  updateDataUser(){
    this.authService.updateValueUser(this.data).subscribe(
      (response) => {
        console.log('Usuario modificado con éxito', response);
        alert('Usuario creado exitosamente');
      },
      (error) => {
        console.error('Error al registrar usuario', error);
        alert('Error al registrar usuario');
      }
    ).add(() => {
    });
  }
}