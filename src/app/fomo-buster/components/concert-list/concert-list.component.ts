import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../services/concert.service';

@Component({
  selector: 'concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.scss']
})
export class ConcertListComponent implements OnInit {
  concerts: any[] = [];

  constructor(private concertService: ConcertService) {}

  ngOnInit() {
    this.concertService.getConcerts().subscribe(concerts => {
      this.concerts = concerts;
    });
  }
}
