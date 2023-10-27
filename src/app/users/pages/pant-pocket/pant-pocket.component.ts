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
    if (selectedPocket && selectedPocket.isSelected) {
        const imageName = this.getPantType() === 'H' ? selectedPocket.imageMen?.[0]?.imageName : selectedPocket.imageWomen?.[0]?.imageName;
        if (imageName) {
            const imagePath = `../../../../assets/img/${imageName}`;
            return imagePath;
        }
    }

    return undefined;
}

getSelectedPocketImageD(): string | undefined {
    const selectedPocket = this.pocketsList.find(pocket => pocket.isSelected && pocket.typePocket === 'D');

    if (selectedPocket && selectedPocket.isSelected) {
        const imageName = this.getPantType() === 'H' ? selectedPocket.imageMen?.[0]?.imageName : selectedPocket.imageWomen?.[0]?.imageName;
        if (imageName) {
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

public savePocketSelection() {
  const selectedPocketT = this.pocketsList.find(pocket => pocket.isSelected && pocket.typePocket === 'T');
  const selectedPocketD = this.pocketsList.find(pocket => pocket.isSelected && pocket.typePocket === 'D');

  if (selectedPocketT && selectedPocketD) {
    this.servicePant.createCustomPant.selectedPocketsT = [{
      namePocket: selectedPocketT.namePocket,
      typePocket: selectedPocketT.typePocket,
      imgPocket: this.getSelectedPocketImageT(),
    }];

    this.servicePant.createCustomPant.selectedPocketsD = [{
      namePocket: selectedPocketD.namePocket,
      typePocket: selectedPocketD.typePocket,
      imgPocket: this.getSelectedPocketImageD(),
    }];

    this.continue = true;
    alert('Bolsillos guardados correctamente.');
    console.log('Bolsillos guardados correctamente:', this.servicePant.createCustomPant);
  } else {
    this.continue = false;
    alert('Por favor, selecciona un bolsillo de cada tipo antes de guardar.');
  }
  }
  
  private loadPockets(): void {
    this.pocketsList = this.service.getListPockets();
  }
  
  ngOnInit(): void {
    this.loadPockets(); 
  }
}
