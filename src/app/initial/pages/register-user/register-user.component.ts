import { Component } from '@angular/core';
import { ApiPersonService } from '../../../services/api-person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  data: any = { };
  isLoading = false;

  constructor(private apiPersonService: ApiPersonService, private router: Router) { }

  convertToText(value: number): void {
    this.data.document_number = value.toString();
  }

  onSubmit() {
    console.log('Datos enviados al servidor:', this.data);
    if (this.data.password !== this.data.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      this.isLoading = false;
      return;
    }
    this.apiPersonService.registerUser(this.data).subscribe(
      (response) => {
        console.log('Usuario registrado con éxito', response);
        this.isLoading = true;
        this.router.navigate(['/login']);
        alert('Usuario creado exitosamente');
      },
      (error) => {
        console.error('Error al registrar usuario', error);
        alert('Error al registrar usuario');
      }
    ).add(() => {
      this.isLoading = false;
    });
  }
}
