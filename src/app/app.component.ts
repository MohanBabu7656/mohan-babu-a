import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if you use Angular directives in app.html

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css',]
})
export class App {
  protected title = 'Mohan babu Asanapuram';
}