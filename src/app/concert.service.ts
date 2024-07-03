import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Concert {
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
  ];

  private concertsSubject = new BehaviorSubject<Concert[]>(this.concerts);

  getConcerts(): Observable<Concert[]> {
    return this.concertsSubject.asObservable();
  }

  addConcert(concert: Omit<Concert, 'id'>): void {
    const newId = Math.max(...this.concerts.map(c => c.id), 0) + 1;
    const newConcert = { ...concert, id: newId };
    this.concerts.push(newConcert);
    this.concertsSubject.next(this.concerts);
  }
}
