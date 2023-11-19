import { Injectable } from '@angular/core';
import {Sizes} from "../models/sizes.model";
import {Pants} from "../models/pant.model";

@Injectable({
  providedIn: 'root'
})
export class SizeServiceService {

  sizesList = [{
  id:4,
  nameSize: "4", 
  contourSize: 68,
  crotchLength:92,
  wipeHip: 78,
  wideBoot:54,
  wideThigh: 36,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:6,
  nameSize: "6",  
  contourSize: 72,
  crotchLength:96,
  wipeHip: 78,
  wideBoot:56,
  wideThigh: 38,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:8,
  nameSize: "8", 
  contourSize: 76,
  crotchLength:100,
  wipeHip: 78,
  wideBoot:58,
  wideThigh: 40,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:10,
  nameSize: "10", 
  contourSize: 80,
  crotchLength:104,
  wipeHip: 78,
  wideBoot:60,
  wideThigh: 40,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:12,
  nameSize: "12", 
  contourSize: 84,
  crotchLength:108,
  wipeHip: 78,
  wideBoot:62,
  wideThigh: 44,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:14,
  nameSize: "14", 
  contourSize: 88,
  crotchLength:112,
  wipeHip: 78,
  wideBoot:64,
  wideThigh: 46,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:16,
  nameSize: "16", 
  contourSize: 92,
  crotchLength:116,
  wipeHip: 78,
  wideBoot:66,
  wideThigh: 48,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:18,
  nameSize: "18", 
  contourSize: 96,
  crotchLength:120,
  wipeHip: 78,
  wideBoot:68,
  wideThigh: 50,
  long:104,
  type:"M",
  isSelected: false,
},{
  id:0,
  nameSize: "Personaliza tu talla", 
  contourSize: 0,
  crotchLength:0,
  wipeHip: 0,
  wideBoot:0,
  wideThigh: 0,
  long:0,
  type:"M",
  isSelected: true,
},{
  id:28,
  nameSize: "28", 
  contourSize: 72,
  crotchLength:96,
  wipeHip: 80,
  wideBoot:56,
  wideThigh: 38,
  long:107,
  type:"H",
  isSelected: false,
},{
  id:30,
  nameSize: "30", 
  contourSize: 76,
  crotchLength:100,
  wipeHip: 80,
  wideBoot:58,
  wideThigh: 40,
  long:107,
  type:"H",
  isSelected: false,
},{
  id:32,
  nameSize: "32", 
  contourSize: 80,
  crotchLength:104,
  wipeHip: 80,
  wideBoot:60,
  wideThigh: 42,
  long:107,
  type:"H",
  isSelected: false,
},{
  id:34,
  nameSize: "34", 
  contourSize: 84,
  crotchLength:108,
  wipeHip: 80,
  wideBoot:62,
  wideThigh: 44,
  long:107,
  type:"H",
  isSelected: false,
},{
  id:36,
  nameSize: "36", 
  contourSize: 88,
  crotchLength:112,
  wipeHip: 80,
  wideBoot:64,
  wideThigh: 46,
  long:107,
  type:"H",
  isSelected: false,
},{
  id:2,
  nameSize: "Personaliza tu talla", 
  contourSize: 0,
  crotchLength:0,
  wipeHip: 0,
  wideBoot:0,
  wideThigh: 0,
  long:0,
  type:"H",
  isSelected: true,
}]

sizesListAux: Sizes[] = [];

constructor() {}

 public getListSizes():Sizes[]{
  return this.sizesList;
 }

 public getListGender():Sizes[]{
  return this.sizesListAux;
 }

 public getSizeById(id: number): Sizes | null {
  for (let index = 0; index < this.sizesList.length; index++) {
    if (this.sizesList[index].id == id) {
      return this.sizesList[index];
    }
  }
  return null;
 }

  public getSizesByGender(gender: string): Sizes[] {
    return this.sizesListAux = this.sizesList.filter(size => size.type === gender);
  }
}
