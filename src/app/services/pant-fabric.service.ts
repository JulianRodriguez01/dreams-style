import { Injectable } from '@angular/core';
import {Fabrics} from "../models/fabric.model";
import {Pants} from "../models/pant.model";

@Injectable({
  providedIn: 'root'
})
export class PantFabricService {

  fabricsList =  [
    {
      nameFabric: "Mezclilla",
      colors: [
        { id: 2, nameFabric: "Mezclilla", name: 'Negro', hex: '#000000', isSelected: false , image: 'imgMezclillaBlack.jpg'},
        { id: 3, nameFabric: "Mezclilla", name: 'Azul', hex: '#0000FF', isSelected: false , image: 'imgMezclillaBlue.jpg'},
        { id: 4, nameFabric: "Mezclilla", name: 'Gris', hex: '#808080', isSelected: false , image: 'imgMezclillaGray.jpg'},
        { id: 5, nameFabric: "Mezclilla", name: 'Blanco', hex: '#FFFFFF', isSelected: false , image: 'imgMezclillaWhite.jpg'}
      ]
    },
    {
      nameFabric: "Índigo",
      colors: [
        { id: 6, nameFabric: "Índigo", name: 'Azul oscuro', hex: '#191970', isSelected: false ,image: 'imgIndigoBlueDark.jpg'},
        { id: 7, nameFabric: "Índigo", name: 'Índigo claro', hex: '#4B0082', isSelected: false , image: 'imgIndigoBlueLight.jpg'},
        { id: 8, nameFabric: "Índigo", name: 'Azul medianoche', hex: '#000080', isSelected: false , image: 'imgIndigoBlueMidnight.jpg'},
        { id: 9, nameFabric: "Índigo", name: 'Azul pizarra', hex: '#6A5ACD', isSelected: false ,  image: 'imgIndigoBlueSlate.jpg'}
      ]
    },
    {
      nameFabric: "Gabardina",
      colors: [
        { id: 10, nameFabric: "Gabardina", name: 'Beige', hex: '#F5F5DC', isSelected: false  , image: 'imgGabardinaBeige.jpg'},
        { id: 11, nameFabric: "Gabardina", name: 'Caqui', hex: '#F0E68C', isSelected: false , image: 'imgGabrdinaCaqui.jpg'},
        { id: 12, nameFabric: "Gabardina", name: 'Verde oliva', hex: '#808000', isSelected: false , image: 'imgGabardinaGreen.jpg'},
        { id: 13, nameFabric: "Gabardina", name: 'Marrón claro', hex: '#D2B48C', isSelected: false , image: 'imgGabardinaBrown.jpg'}
      ]
    },
    {
      nameFabric: "Algodón",
      colors: [
        { id: 14, nameFabric: "Algodón", name: 'Blanco roto', hex: '#FFF5E1', isSelected: false , image: 'imgCottonWhite.jpg'},
        { id: 15, nameFabric: "Algodón", name: 'Crema', hex: '#FFFDD0', isSelected: false, image: 'imgCottonCream.jpg' },
        { id: 16, nameFabric: "Algodón", name: 'Azul cielo', hex: '#87CEFA', isSelected: false , image: 'imgCottonBlue.jpg' },
        { id: 17, nameFabric: "Algodón", name: 'Gris claro', hex: '#D3D3D3', isSelected: false , image: 'imgCottonGray.jpg'}
      ]
    },
    {
      nameFabric: "Drill",
      colors: [
        { id: 18, nameFabric: "Drill", name: 'Verde militar', hex: '#556B2F', isSelected: false , image: 'imgDrillGreen.jpg'  },
        { id: 19, nameFabric: "Drill", name: 'Caqui oscuro', hex: '#BDB76B', isSelected: false , image: 'imgDrillCaqui.jpg' },
        { id: 20, nameFabric: "Drill", name: 'Marrón oscuro', hex: '#8B4513', isSelected: false , image: 'imgDrillBrown.jpg' },
        { id: 21, nameFabric: "Drill", name: 'Gris antracita', hex: '#2F4F4F', isSelected: false , image: 'imgDrillGray.jpg'}
      ]
    },
    {
      nameFabric: "Pana",
      colors: [
        { id: 22, nameFabric: "Pana", name: 'Marrón chocolate', hex: '#D2691E', isSelected: false , image: 'imgCorduryBrown.jpg' },
        { id: 23, nameFabric: "Pana", name: 'Verde bosque', hex: '#228B22', isSelected: false , image: 'imgCorduryGreen.jpg'},
        { id: 24, nameFabric: "Pana", name: 'Gris topo', hex: '#808080', isSelected: false , image: 'imgCorduryGray.jpg'},
        { id: 25, nameFabric: "Pana", name: 'Borgoña', hex: '#800020', isSelected: false , image: 'imgCorduryBorgoña.jpg'}
      ]
    }
  ];

  constructor() { }

  public getListFabrics():Fabrics[]{
    return this.fabricsList;
  }
}
