export interface Pockets {
  id?: number,
  namePocket?:String;
  typePocket?:String;
  imagePocket?:String;
  isSelected?: boolean;
  imageMen?: { imageName: String, type: String }[];
  imageWomen?: { imageName: String, type: String }[];
}