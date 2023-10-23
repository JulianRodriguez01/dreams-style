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
  isSelected?: boolean,
  namePocket?: String;
  typePocket?: String;
  imagePocket?: String;
  imageMen?: [{ imageName?: String, type?: String}],
  imageWomen?: [{ imageName?: String,type?: String}],
  colors?: any;
}