import { Component, OnInit } from '@angular/core';
import { Sizes } from 'src/app/models/sizes.model';
import { SizeServiceService } from 'src/app/services/pant-size.service';
import { CustomPantService } from 'src/app/services/custom-pant.service';


@Component({
  selector: 'app-pant-size',
  templateUrl: './pant-size.component.html',
  styleUrls: ['./pant-size.component.scss']
})

export class PantSizeComponent implements OnInit {

  sizesList: Sizes[] = [];
  sizesListAuxAux: Sizes[] = [];
  selectedSize: Sizes;
  continue = false;


  constructor(private service: SizeServiceService, private servicePant:CustomPantService) {
    this.selectedSize = {
      id: 0,
      nameSize: "Personalizar medidas",
      contourSize: 0,
      crotchLength: 0,
      wipeHip: 0,
      wideBoot: 0,
      wideThigh: 0,
      long: 0,
      isSelected: false
    };

    this.sizesListAuxAux = this.service.getListGender();
  }

  searchType() {
    const lista = this.service.getListGender();
    if (lista.length > 0) {
      const primerElemento = lista[0];
      if (primerElemento && primerElemento.hasOwnProperty('type')) {
        const type = primerElemento.type;
        return type;
      }
    }
    return null; 
  }

  toggleSizeSelection(size: Sizes) {
    this.sizesList.forEach(s => s.isSelected = false);
    size.isSelected = true;
    this.selectedSize = size; 
  }

  public saveMeasureementPant() {
    let measurementSelection = this.sizesList.find(medida => medida.isSelected === true);
    if (measurementSelection) {
        const customPant = this.servicePant.listNewPants;

        if (customPant) {
            // Actualiza las medidas
            customPant.idMeasurement = measurementSelection.id;
            customPant.nameSize = measurementSelection.nameSize;
            customPant.contourSize = measurementSelection.contourSize;
            customPant.crotchLength = measurementSelection.crotchLength;
            customPant.wipeHip = measurementSelection.wipeHip;
            customPant.wideBoot = measurementSelection.wideBoot;
            customPant.wideThigh = measurementSelection.wideThigh;
            customPant.long = measurementSelection.long;
            this.continue = true;
            alert('Medidas guardadas correctamente.');
        } else {
            this.continue = false;
            alert('Ocurrió un error al guardar las medidas.');
        }
    } else {
        this.continue = false;
        alert('Por favor, selecciona una medida antes de guardar.');
    }
}
  
  private loadSizes(): void {
    this.sizesList = this.service.getListSizes();
  }

  ngOnInit(): void {
    this.loadSizes();
  }
}
