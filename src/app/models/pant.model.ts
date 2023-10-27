export interface Pants {
  id?: number;
  nameFabric?: String;
  nameSize?: String;
  contourSize?: number;
  crotchLength?: number;
  wipeHip?: number;
  wideBoot?: number;
  wideThigh?: number;
  long?: number;
  type?: String;
  isSelected?: boolean;
  selectedPocketsT?: [{ namePocket?: String; typePocket?: String; imgPocket?: String }];
  selectedPocketsD?: [{ namePocket?: String; typePocket?: String; imgPocket?: String }];
  imageMen?: [{ imageName?: String, type?: String}];
  imageWomen?: [{ imageName?: String,type?: String}];
  colors?: [{ name?: String, hex?: String}];
}