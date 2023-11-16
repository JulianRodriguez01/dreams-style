import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {

  public name_user = '';
  public last_name_user = '';

  constructor(private authService: AuthService){}

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const userInfo = this.authService.getUserInfoFromToken(token);
      if (userInfo) {
        this.name_user = userInfo.userEmail;
        console.log('Correo electrónico:', userInfo.userEmail);
        console.log('Nombre:', userInfo.userName);
      } else {
        console.error('No se pudo obtener la información del usuario desde el token.');
      }
    } else {
      console.error('El token es nulo.');
    }
  }

  getUserByEmail(email: string): void {
    this.authService.getUserEmail(email).subscribe(
      (data) => {
        console.log('Respuesta del servidor:', data);
        // Aquí puedes manipular la respuesta del servidor según tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}