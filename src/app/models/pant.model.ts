export interface Pants {
  idPant?: number;
  idMeasurement?: number;
  nameFabric?: String;
  nameSize?: String;
  contourSize?: number;
  crotchLength?: number;
  wipeHip?: number;
  wideBoot?: number;
  wideThigh?: number;
  long?: number;
  type?: String;
  selectedPocketsT?: [{ namePocket?: String; typePocket?: String; imgPocket?: String }];
  selectedPocketsD?: [{ namePocket?: String; typePocket?: String; imgPocket?: String }];
  imageMen?: [{ imageName?: String, type?: String}];
  imageWomen?: [{ imageName?: String,type?: String}];
  colors?: [{ idFabric?: String , name?: String, hex?: String}];

}