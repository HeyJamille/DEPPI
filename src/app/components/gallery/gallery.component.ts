import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  imports: [CommonModule] 
})
export class GalleryComponent {
  photos = [
    { image: 'assets/image1.jpg' },
    { image: 'assets/image2.jpg' },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volta para o primeiro slide ao chegar ao fim
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.photos.length - 1; // Vai para o último slide ao chegar ao começo
    }
  }
}
