import { Injectable } from '@angular/core';
import { Pants } from "../models/pant.model";

@Injectable({
  providedIn: 'root'
})
export class CustomPantService {

  createCustomPant: Pants = {
    id: 0,
    nameFabric: "",
    nameSize: "", 
    contourSize: 0,
    crotchLength: 0,
    wipeHip: 0,
    wideBoot: 0,
    wideThigh: 0,
    long: 0,
    type: "",
    isSelected: false,
    namePocket: "",
    typePocket: "",
    imagePocket: '',
    imageMen: [{ imageName: '', type: 'H'}],
    imageWomen: [{ imageName: '',type: 'M'}],
    colors: [
      { name: '', hex: '', isSelected: false , image: ''},
    ]
  };

  constructor() { 
  }

  public getListPants(): Pants{
    return this.createCustomPant;
  }
}
