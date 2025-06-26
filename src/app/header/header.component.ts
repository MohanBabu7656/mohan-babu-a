import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public username: string = 'Mohan Babu Asanapuram';

  getUsernameCharacters(): string[] {
    return this.username.split('');
  }



  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  confirmDownload(event: Event) {
    event.preventDefault(); // Prevent the default link behavior
    if (confirm('Do you want to download my resume?')) {
      // Create a temporary link element
      const link = document.createElement('a');
      link.setAttribute('href', '/assets/Mohan_Babu_Asanapuram_resume (1).pdf');
      link.setAttribute('download', ''); // Add the download attribute
      // Programmatically click the link to trigger download
      link.click();
    }
  }
}