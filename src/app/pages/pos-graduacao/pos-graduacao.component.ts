import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pos-graduacao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pos-graduacao.component.html',
})
export class PosGraduacaoComponent {

}
