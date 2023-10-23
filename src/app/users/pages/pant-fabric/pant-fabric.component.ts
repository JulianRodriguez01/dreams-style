import { Component, OnInit } from '@angular/core';
import { Fabrics } from 'src/app/models/fabric.model';
import {PantFabricService } from 'src/app/services/pant-fabric.service';
import { Pants } from 'src/app/models/pant.model';
import { CustomPantService } from 'src/app/services/custom-pant.service'


@Component({
  selector: 'app-pant-fabric',
  templateUrl: './pant-fabric.component.html',
  styleUrls: ['./pant-fabric.component.scss']
})
export class PantFabricComponent implements OnInit {

  fabricsList: Fabrics[] = [];
  selectedColor: Object[];
  selectedImage: string ;
  continue:boolean = false;


  constructor(private service: PantFabricService, private servicePant:CustomPantService) {
    this.selectedColor  =  [{ name: 'Negro', hex: '#000000', isSelected: true , image: 'imgMezclillaWhite.jpg'}];
    this.selectedImage = 'imgFabricDefault.png'; 
  }

  private loadSizes(): void {
    this.fabricsList = this.service.getListFabrics();
  }

  toggleColorSelection(color: any, fabric: Fabrics) {
    if (fabric.colors) {
      fabric.colors.forEach((c: any) => c.isSelected = false);
      color.isSelected = true;
      this.selectedColor = color; 
      this.selectedImage = color.image;
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
    event.stopPropagation(); // Evita la propagación del evento
    this.toggleColorSelection(color, fabric); // Llama al método original
  }

  saveFabricSelection() {

  }
  
  ngOnInit(): void {
    this.loadSizes();
  }
}
