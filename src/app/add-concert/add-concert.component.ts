import { Component } from '@angular/core';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.scss']
})
export class AddConcertComponent {
  name: string = '';
  date: string = '';
  price: number = 0;

  constructor(private concertService: ConcertService) {}

  onSubmit() {
    if (this.name && this.date && this.price) {
      this.concertService.addConcert({
        name: this.name,
        date: this.date,
        price: this.price
      });
      this.resetForm();
    }
  }

  resetForm() {
    this.name = '';
    this.date = '';
    this.price = 0;
  }
}
