import { Component } from '@angular/core';
import { CustomPantService } from 'src/app/services/custom-pant.service';

@Component({
  selector: 'app-pant-stiker',
  templateUrl: './pant-stiker.component.html',
  styleUrls: ['./pant-stiker.component.scss']
})
export class PantStikerComponent {
  imageUrls: string[] = [];
  showErrorMessage: boolean = false;

  constructor(private servicePant:CustomPantService) {
  }

  onFileSelected(event: any) {
    if (this.imageUrls.length >= 3) {
      this.showErrorMessage = true;
      return;
    }
    
    const files = event.target.files;
    for (let i = 0; i < files.length && this.imageUrls.length < 3; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrls.push(e.target.result);
      };
      reader.readAsDataURL(files[i]);
    }
  }

  removeImage(index: number) {
    this.imageUrls.splice(index, 1);
    this.showErrorMessage = false; 
  }

  getImagePocketsT() {
    if (this.servicePant.listNewPants.selectedPocketsT) {
        return this.servicePant.listNewPants.selectedPocketsT.map(pocket => pocket.imgPocket);
    }
    return [];
  } 

  getImagePocketsD() {
    if (this.servicePant.listNewPants.selectedPocketsD) {
        return this.servicePant.listNewPants.selectedPocketsD.map(pocket => pocket.imgPocket);
    }
    return [];
  }
}



