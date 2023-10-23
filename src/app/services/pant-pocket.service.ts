import { Injectable } from '@angular/core';
import {Pockets} from "../models/pocket.models";

@Injectable({
  providedIn: 'root'
})
export class PantPocketService {

  pocketsListAux: Pockets[] = [];

  pocketsList =  [
    {
      id: 1,
      namePocket: "Solapa con botón",
      typePocket: "T",
      imagePocket: 'iconPocketD1.jpg',
      isSelected: false,
      imageMen: [{ imageName: 'bannerManPantT1.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantT1.jpg', type: 'M'}]
    },{
      id: 2,
      namePocket: "Solapa con hebilla",
      typePocket: "T",
      imagePocket: 'iconPocketD2.jpg',
      isSelected: false,
      imageMen: [{ imageName: 'bannerManPantT2.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantT2.jpg', type: 'M'}]
    },{
    }, {
      id: 3,
      namePocket: "Abertura con cremallera",
      typePocket: "T",
      imagePocket: 'iconPocketD3.jpg',
      isSelected: false,
      imageMen: [{ imageName: 'bannerManPantT3.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantT3.jpg', type: 'M'}]
    }, {
      id: 4,
      namePocket: "Sin bolsillo",
      typePocket: "T",
      imagePocket: 'iconPocketD4.jpg',
      isSelected: true,
      imageMen: [{ imageName: 'bannerMan.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWoman.jpg', type: 'M'}]
    },{
      id: 5,
      namePocket: "Parche con abertura diagonal",
      typePocket: "D",
      imagePocket: 'iconPocketT1.jpg',
      isSelected: false,
      imageMen: [{ imageName: 'bannerManPantD1.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantD1.jpg', type: 'M'}]
    },{
      id: 6,
      namePocket: "Parche rectangular",
      typePocket: "D",
      imagePocket: 'iconPocketT2.jpg',
      isSelected: false,
      imageMen: [{ imageName: 'bannerManPantD2.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantD2.jpg', type: 'M'}]
    },{
      id: 7,
      namePocket: "5 bolsillos",
      typePocket: "D",
      imagePocket: 'iconPocketT3.jpg',
      isSelected: false,
      imageMen: [{ imageName: 'bannerManPantD3.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantD3.jpg', type: 'M'}]
    },{
      id: 8,
      namePocket: "Redondeado a la cadera embellecido",
      typePocket: "D",
      imagePocket: 'iconPocketT4.jpg',
      isSelected: true,
      imageMen: [{ imageName: 'bannerManPantD4.jpg', type: 'H'}],
      imageWomen: [{ imageName: 'bannerWomanPantD4.jpg', type: 'M'}]
    }
  ];

  constructor() { }

  public getListPockets():Pockets[]{
    return this.pocketsList;
   }
  

  public getListGender():Pockets[]{
    return this.pocketsListAux;
   }


}
