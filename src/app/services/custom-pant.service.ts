import { Injectable } from '@angular/core';
import { Pants } from "../models/pant.model";

@Injectable({
  providedIn: 'root'
})
export class CustomPantService {

  listNewPants: Pants = {
    idPant: 0,
    idMeasurement: 0,
    nameFabric: "",
    nameSize: "", 
    contourSize: 0,
    crotchLength: 0,
    wipeHip: 0,
    wideBoot: 0,
    wideThigh: 0,
    long: 0,
    type: "",
    selectedPocketsT: [{namePocket: "", typePocket: "", imgPocket: ""}], 
    selectedPocketsD: [{namePocket: "", typePocket: "", imgPocket: ""}], 
    imageMen: [{ imageName: '', type: 'H'}],
    imageWomen: [{ imageName: '',type: 'M'}],
    colors: [{ idFabric : '', name: '', hex: ''}]
  };

  constructor() { 
  }

  public getIdPant(): number | undefined {
    return this.listNewPants?.idPant;
  }

  public getIdMeasurement(): number | undefined {
    return this.listNewPants?.idMeasurement;
  }
  
  public getSelectedPocketsTImages(): String {
    const selectedPocketsT = this.listNewPants.selectedPocketsT;
    if (selectedPocketsT && selectedPocketsT.length > 0) {
      const imgPocket = selectedPocketsT[0].imgPocket || '';
      return imgPocket;
    }
    return '';
  }
  
  public getSelectedPocketsDImages(): String {
    const selectedPocketsD = this.listNewPants.selectedPocketsD;
    if (selectedPocketsD && selectedPocketsD.length > 0) {
      const imgPocket = selectedPocketsD[0].imgPocket || '';
      return imgPocket;
    }
    return '';
  }

  public getSelectedSizeName(): String {
    return this.listNewPants.nameSize || '';
  }
  
  public getSelectedFabricName(): String {
    return this.listNewPants.nameFabric || '';
  }
  
  public getSelectedColorHex(): String {
    const selectedColor = this.listNewPants.colors;
    if (selectedColor && selectedColor[0] && selectedColor[0].hex) {
      return selectedColor[0].hex;
    }
    return '';
  }

  public getSelectedColorName(): String {
    const selectedColor = this.listNewPants.colors;
    if (selectedColor && selectedColor[0] && selectedColor[0].name) {
      return selectedColor[0].name;
    }
    return '';
  }
  
  public getListPants(): Pants{
    return this.listNewPants;
  }
}
