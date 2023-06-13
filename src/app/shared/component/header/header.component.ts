import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <a [routerLink]="['/']"><span>Mi aplicacion de angular</span></a>
    <span class="spacer"></span>
    <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  
  constructor(private router: Router){
  }

  goToCheckout(): void{
    this.router.navigate(['/checkout']);
  } 

}
