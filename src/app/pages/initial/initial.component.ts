import { Component } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
  
  carouselItems: any[] = []; // Define carouselItems como un arreglo vacío o según tu estructura de datos
  interval = 5000;
}
