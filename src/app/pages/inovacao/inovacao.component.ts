import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-inovacao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './inovacao.component.html',
})
export class InovacaoComponent {

}
