import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
    
  closeMenu() {
    this.isMenuOpen = false;
  }
}
