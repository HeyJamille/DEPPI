import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pesquisa.component.html',
})
export class PesquisaComponent {

}
