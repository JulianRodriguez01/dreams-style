import { Component } from '@angular/core';
import { SizeServiceService } from 'src/app/services/pant-size.service';
import { Sizes } from 'src/app/models/sizes.model';
import { CustomPantService} from 'src/app/services/custom-pant.service';

@Component({
  selector: 'app-pant-gender',
  templateUrl: './pant-gender.component.html',
  styleUrls: ['./pant-gender.component.scss']
})
export class PantGenderComponent {

  sizesListAux: Sizes[] = [];
  sizesList: Sizes[] = [];

  constructor(private sizeService: SizeServiceService, private servicePant: CustomPantService) {}

  public selectPantGender(gender: string) {
    this.sizeService.getSizesByGender(gender);
    const customPant = this.servicePant.getListPants();
    if (customPant) {
      customPant.type = gender;
    } else {
      this.servicePant.createCustomPant.type = gender;
    }
    console.log(customPant);
  }

  ngOnInit(): void {
   
  }
}
