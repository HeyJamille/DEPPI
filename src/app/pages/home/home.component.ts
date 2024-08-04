import { Component } from '@angular/core';
import { ContentsComponent } from '../../components/contents/contents.component'; // Ajuste o caminho conforme necessário
import { AboutComponent } from '../../components/about/about.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ContactsComponent } from '../../contacts/contacts.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ContentsComponent, AboutComponent, GalleryComponent, ContactsComponent] // Importe diretamente aqui
})
export class HomeComponent {
}
