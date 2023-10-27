import { Component } from '@angular/core';
import { CustomPantService } from 'src/app/services/custom-pant.service';

@Component({
  selector: 'app-pant-custom',
  templateUrl: './pant-custom.component.html',
  styleUrls: ['./pant-custom.component.scss']
})
export class PantCustomComponent {

  selectedPocketsT: String = '';
  selectedPocketsD: String = '';
  selectedSize: String = '';
  selectedFabric: String = '';
  selectedColorHex: String = '';

  constructor(private servicePant: CustomPantService) {
    this.selectedPocketsT = this.servicePant.getSelectedPocketsTImages();
    console.log("Ruta imagen T" + this.selectedPocketsT);
    this.selectedPocketsD = this.servicePant.getSelectedPocketsDImages();
    console.log("Ruta imagen D" + this.selectedPocketsD);

    this.selectedSize = this.servicePant.getSelectedSizeName();
    this.selectedFabric = this.servicePant.getSelectedFabricName();
    this.selectedColorHex = this.servicePant.getSelectedColorHex();
  }
}
