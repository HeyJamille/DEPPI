import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-extensao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './extensao.component.html',
})
export class ExtensaoComponent {

}
