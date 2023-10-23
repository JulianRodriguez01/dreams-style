import { Injectable } from '@angular/core';
import {Fabrics} from "../models/fabric.model";
import {Pants} from "../models/pant.model";

@Injectable({
  providedIn: 'root'
})
export class PantFabricService {

  fabricsList =  [
    {
      id: 1,
      nameFabric: "Mezclilla",
      colors: [
        { name: 'Negro', hex: '#000000', isSelected: false , image: 'imgMezclillaBlack.jpg'},
        { name: 'Azul', hex: '#0000FF', isSelected: false , image: 'imgMezclillaBlue.jpg'},
        { name: 'Gris', hex: '#808080', isSelected: false , image: 'imgMezclillaGray.jpg'},
        { name: 'Blanco', hex: '#FFFFFF', isSelected: false , image: 'imgMezclillaWhite.jpg'}
      ]
    },
    {
      id: 2,
      nameFabric: "Índigo",
      colors: [
        { name: 'Azul oscuro', hex: '#191970', isSelected: false ,image: 'imgIndigoBlueDark.jpg'},
        { name: 'Índigo claro', hex: '#4B0082', isSelected: false , image: 'imgIndigoBlueLight.jpg'},
        { name: 'Azul medianoche', hex: '#000080', isSelected: false , image: 'imgIndigoBlueMidnight.jpg'},
        { name: 'Azul pizarra', hex: '#6A5ACD', isSelected: false ,  image: 'imgIndigoBlueSlate.jpg'}
      ]
    },
    {
      id: 3,
      nameFabric: "Gabardina",
      colors: [
        { name: 'Beige', hex: '#F5F5DC', isSelected: false  , image: 'imgGabardinaBeige.jpg'},
        { name: 'Caqui', hex: '#F0E68C', isSelected: false , image: 'imgGabrdinaCaqui.jpg'},
        { name: 'Verde oliva', hex: '#808000', isSelected: false , image: 'imgGabardinaGreen.jpg'},
        { name: 'Marrón claro', hex: '#D2B48C', isSelected: false , image: 'imgGabardinaBrown.jpg'}
      ]
    },
    {
      id: 4,
      nameFabric: "Algodón",
      colors: [
        { name: 'Blanco roto', hex: '#FFF5E1', isSelected: false , image: 'imgCottonWhite.jpg'},
        { name: 'Crema', hex: '#FFFDD0', isSelected: false, image: 'imgCottonCream.jpg' },
        { name: 'Azul cielo', hex: '#87CEFA', isSelected: false , image: 'imgCottonBlue.jpg' },
        { name: 'Gris claro', hex: '#D3D3D3', isSelected: false , image: 'imgCottonGray.jpg'}
      ]
    },
    {
      id: 5,
      nameFabric: "Drill",
      colors: [
        { name: 'Verde militar', hex: '#556B2F', isSelected: false , image: 'imgDrillGreen.jpg'  },
        { name: 'Caqui oscuro', hex: '#BDB76B', isSelected: false , image: 'imgDrillCaqui.jpg' },
        { name: 'Marrón oscuro', hex: '#8B4513', isSelected: false , image: 'imgDrillBrown.jpg' },
        { name: 'Gris antracita', hex: '#2F4F4F', isSelected: false , image: 'imgDrillGray.jpg'}
      ]
    },
    {
      id: 6,
      nameFabric: "Pana",
      colors: [
        { name: 'Marrón chocolate', hex: '#D2691E', isSelected: false , image: 'imgCorduryBrown.jpg' },
        { name: 'Verde bosque', hex: '#228B22', isSelected: false , image: 'imgCorduryGreen.jpg'},
        { name: 'Gris topo', hex: '#808080', isSelected: false , image: 'imgCorduryGray.jpg'},
        { name: 'Borgoña', hex: '#800020', isSelected: false , image: 'imgCorduryBorgoña.jpg'}
      ]
    }
  ];

  constructor() { }

  public getListFabrics():Fabrics[]{
    return this.fabricsList;
  }
}
