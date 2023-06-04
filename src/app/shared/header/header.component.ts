import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar color="primary">
  <span>Mi aplicacion de angular</span>
</mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

}
