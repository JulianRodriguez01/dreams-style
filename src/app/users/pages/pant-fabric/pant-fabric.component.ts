import { Component, OnInit } from '@angular/core';
import { Fabrics } from 'src/app/models/fabric.model';
import {PantFabricService } from 'src/app/services/pant-fabric.service';
import { CustomPantService } from 'src/app/services/custom-pant.service'


@Component({
  selector: 'app-pant-fabric',
  templateUrl: './pant-fabric.component.html',
  styleUrls: ['./pant-fabric.component.scss']
})
export class PantFabricComponent implements OnInit {

  fabricsList: Fabrics[] = [];
  selectedColor: Object[] = [];
  selectedImage: string ;
  continue:boolean = false;


  constructor(private service: PantFabricService, private servicePant:CustomPantService) {
    this.selectedImage = 'imgFabricDefault.png'; 
  }

  private loadSizes(): void {
    this.fabricsList = this.service.getListFabrics();
  }

  toggleColorSelection(color: any, fabric: Fabrics) {
    if (fabric.colors) {
      fabric.colors.forEach((c: any) => c.isSelected = false);
      color.isSelected = true;
      this.selectedColor = [color]; // Cambio aquí
      this.selectedImage = color.image;
  
      console.log(JSON.stringify(color)); // Esto imprimirá el objeto color como una cadena legible.
      console.log(JSON.stringify(this.selectedColor) + "otra validación de color seleccionado");
    }
  }
  

  toggleAccordion(event: Event) {
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(element => {
      if (element !== event.target) {
        element.removeAttribute('open');
      }
    });
  }

  handleColorClick(event: Event, color: any, fabric: Fabrics) {
    event.stopPropagation();
    this.toggleColorSelection(color, fabric); 
  }

  saveFabricSelection() {

    console.log(Array.isArray(this.selectedColor + "Array de tela seleccionada")); // Asegúrate de que esto imprima 'true'.

    if (this.selectedColor.length > 0) {
      const color = this.selectedColor[0] as any; 
      this.servicePant.createCustomPant.nameFabric = color.name;
      this.servicePant.createCustomPant.colors = [{
        name: color.name,
        hex: color.hex
      }];
      
      this.continue = true;
      alert('Tela guardada correctamente.');
      console.log('Tela guardada correctamente:', this.servicePant.createCustomPant);
    } else {
      alert('Por favor, selecciona una tela antes de guardar.');
    }
  }
  
  ngOnInit(): void {
    this.loadSizes();
  }
}
