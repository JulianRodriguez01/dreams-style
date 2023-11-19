import { Injectable } from '@angular/core';
import { Pants } from "../models/pant.model";

@Injectable({
  providedIn: 'root'
})
export class CustomPantListService {

  listDesingPant: Pants[] = [{
    idPant: 0,
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
    colors: [{ name: '', hex: ''}]
  }];

  constructor() { }

  private nextId: number = 1; // Inicializar el ID en 1

  addPant(pant: Pants) {
    pant.idPant = this.nextId; // Asignar el próximo ID
    this.listDesingPant.push({idPant: this.nextId , ...pant}); // Agregar el pantalón a la lista con el ID asignado
    this.nextId++; // Incrementar el próximo ID
}

  getList(): Pants[] {
    return this.listDesingPant.filter(pant => pant.idPant !== 0);
  }
}
