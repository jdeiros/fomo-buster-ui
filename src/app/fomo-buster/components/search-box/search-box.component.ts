import { Component } from '@angular/core';

@Component({
  selector: 'concert-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscar concierto..." />
  `
})

export class SearchBoxComponent {
  constructor() { }
 }
