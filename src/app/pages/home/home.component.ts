import { Component } from '@angular/core';
import { SectorsComponent } from '../../components/sectors/sectors.component'; // Ajuste o caminho conforme necessário
import { AboutComponent } from '../../components/about/about.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, SectorsComponent, GalleryComponent, ContactsComponent, FooterComponent] 
})
export class HomeComponent {
}
