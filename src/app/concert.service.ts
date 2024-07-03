import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Concert {
  id: number;
  name: string;
  date: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  private concerts: Concert[] = [
    { id: 1, name: 'Rock Festival', date: '2024-08-15', price: 50 },
    { id: 2, name: 'Jazz Night', date: '2024-09-20', price: 35 },
    // Agrega más conciertos aquí
  ];

  getConcerts(): Observable<Concert[]> {
    return of(this.concerts);
  }

  getConcert(id: number): Observable<Concert | undefined> {
    return of(this.concerts.find(concert => concert.id === id));
  }
}
