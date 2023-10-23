import { Component, OnInit } from '@angular/core';
import { Pockets } from 'src/app/models/pocket.models';
import { PantPocketService } from 'src/app/services/pant-pocket.service';
import { Pants } from 'src/app/models/pant.model';
import { CustomPantService } from 'src/app/services/custom-pant.service';

@Component({
  selector: 'app-pant-pocket',
  templateUrl: './pant-pocket.component.html',
  styleUrls: ['./pant-pocket.component.scss']
})
export class PantPocketComponent {

  pocketsListAuxAux: Pockets[] = [];
  pocketsList: Pockets[] = []; 
  listaDePantalones: Pants[]=[];
  continue = false;
  selectedPocket: Pockets;

  constructor(private service: PantPocketService, private servicePant:CustomPantService) {
    this.selectedPocket = {
      id: 4,
      namePocket: "Sin bolsillo",
      typePocket: "T",
      imagePocket: 'iconPocketD4.jpg',
      isSelected: true,
      imageMen: [{ imageName: '../../../../assets/img/bannerMan.jpg', type: 'H'}],
      imageWomen: [{ imageName: '../../../../assets/img/bannerWoman.jpg', type: 'M'}]
    };

    this.pocketsListAuxAux = this.service.getListGender();
  }

  searchType() {
    const lista = this.service.getListGender();
    if (lista.length > 0) {
      const primerElemento = lista[0];
      if (primerElemento && primerElemento.hasOwnProperty('type')) {
        const type = primerElemento.id;
        return type;
      }
    }
    return null;
  }

  togglesPocketSelection(pocket: Pockets) {
    this.pocketsList.forEach(s => s.isSelected = false);
    pocket.isSelected = true;
    this.selectedPocket = pocket; 
  }

  getPantType(): String | undefined {
    const pants = this.servicePant.getListPants();
    return pants.type ? pants.type : undefined;
  }

  getSelectedPocketImageT(): string | undefined {
    const selectedPocket = this.pocketsList.find(pocket => pocket.isSelected && pocket.typePocket === 'T');
  
    // Verificar si el bolsillo está seleccionado
    if (selectedPocket && selectedPocket.isSelected) {
      const imageName = selectedPocket.imageMen?.[0]?.imageName;
  
      if (selectedPocket.typePocket === 'T' && imageName) {
        const imagePath = `../../../../assets/img/${imageName}`;
        return imagePath;
      }
    }
  
    return undefined;
  }
  
  getSelectedPocketImageD(): string | undefined {
    const selectedPocket = this.pocketsList.find(pocket => pocket.isSelected && pocket.typePocket === 'D');
  
    // Verificar si el bolsillo está seleccionado
    if (selectedPocket && selectedPocket.isSelected) {
      const imageName = selectedPocket.imageMen?.[0]?.imageName;
  
      if (selectedPocket.typePocket === 'D' && imageName) {
        const imagePath = `../../../../assets/img/${imageName}`;
        return imagePath;
      }
    }
  
    return undefined;
  }
  
  

  selectPocket(pocket: Pockets) {
    if (pocket.typePocket === 'T') {
        this.pocketsList.filter(p => p.typePocket === 'T').forEach(p => p.isSelected = false);
    } else if (pocket.typePocket === 'D') {
        this.pocketsList.filter(p => p.typePocket === 'D').forEach(p => p.isSelected = false);
    }
    pocket.isSelected = true;
    this.selectedPocket = pocket;
}

  private loadPockets(): void {
    this.pocketsList = this.service.getListPockets();
  }
  
  ngOnInit(): void {
    this.loadPockets(); 
    console.log("Ruta imagen d" + this.getSelectedPocketImageD());
    console.log("Ruta imagen t" + this.getSelectedPocketImageT());
  }
}
