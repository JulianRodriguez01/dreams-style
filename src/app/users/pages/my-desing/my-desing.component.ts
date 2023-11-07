import { Component, Input } from '@angular/core';
import { CustomPantListService } from 'src/app/services/custom-pant-list.service';

@Component({
  selector: 'app-my-desing',
  templateUrl: './my-desing.component.html',
  styleUrls: ['./my-desing.component.scss']
})
export class MyDesingComponent {
  @Input() currentIndex: number = 0;

  constructor(private listDesingPant: CustomPantListService) {}

  onPrevDesign() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onNextDesign() {
    if (this.currentIndex < this.listDesingPant.getList().length - 1) {
      this.currentIndex++;
    }
  }

  getListOfDesigns() {
    return this.listDesingPant.getList();
  }
}
