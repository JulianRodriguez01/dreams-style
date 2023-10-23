import { Component } from '@angular/core';

@Component({
  selector: 'app-pant-stiker',
  templateUrl: './pant-stiker.component.html',
  styleUrls: ['./pant-stiker.component.scss']
})
export class PantStikerComponent {
  imageUrl: string = "";

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
