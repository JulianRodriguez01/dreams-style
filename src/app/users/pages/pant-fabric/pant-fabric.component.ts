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
  selectedImage: string;
  selectedFabric: String | '' = "";
  continue:boolean = false;


  constructor(private service: PantFabricService, private servicePant:CustomPantService) {
    this.selectedImage = 'imgFabricDefault.png'; 
  }

  private loadSizes(): void {
    this.fabricsList = this.service.getListFabrics();
  }

  toggleColorSelection(color: any, fabric: Fabrics) {
    if (fabric.colors && fabric.nameFabric) {
      fabric.colors.forEach((c: any) => c.isSelected = false);
      color.isSelected = true;
      this.selectedColor = [color];
      this.selectedImage = color.image;
      this.selectedFabric = fabric.nameFabric; // Asigna el nombre de la tela solo si está definido
      console.log(JSON.stringify(color));
      console.log('Nombre de la tela seleccionada: ' + this.selectedFabric);
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
    if (this.selectedColor.length > 0) {
      const color = this.selectedColor[0] as any; 
      this.servicePant.createCustomPant.nameFabric = this.selectedFabric;
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
