import { Component } from '@angular/core';
import { CustomPantService } from 'src/app/services/custom-pant.service';
import { CustomPantListService} from 'src/app/services/custom-pant-list.service';
import { ApiPantService } from '../../../services/api-pant.service';

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
  selectedColorName: String = '';

  constructor(private apiPantService: ApiPantService, private servicePant: CustomPantService, private listDesingPant : CustomPantListService) {
    this.selectedPocketsT = this.servicePant.getSelectedPocketsTImages();
    console.log("Ruta imagen T" + this.selectedPocketsT);
    this.selectedPocketsD = this.servicePant.getSelectedPocketsDImages();
    console.log("Ruta imagen D" + this.selectedPocketsD);
    this.selectedSize = this.servicePant.getSelectedSizeName();
    this.selectedFabric = this.servicePant.getSelectedFabricName();
    this.selectedColorHex = this.servicePant.getSelectedColorHex();
    this.selectedColorName = this.servicePant.getSelectedColorName();
  }

  onSaveDesign() {
    const newDesign = this.servicePant.getListPants();
    this.listDesingPant.addPant(newDesign);
    console.log("Estes es el pantalón-------------------------" + JSON.stringify(this.servicePant));
    console.log("Lista de pantalones: " + JSON.stringify(this.listDesingPant));
    if (this.listDesingPant.getList().includes(newDesign)) {
        alert("Hubo un problema al agregar el diseño.");
    } else {
      const data: any = { id_pant: this.servicePant.getIdPant, id_fabric: this.servicePant.getIdMeasurement, id_pant_measurement: 2}; 
      this.savePant(data);
      alert("Haz creado tu Diseño correctamente!.");
    }
  }

  savePant(data: any) {
    this.apiPantService.addPant(data).subscribe(
      (response) => {
        console.log('Pantalón agregado con éxito', response);
        alert('Pantalón creado exitosamente');
      },
      (error) => {
        console.error('Error al agregar pantalón', error);
        alert('Error al agregar pantalón');
      }
    );
  }
}
