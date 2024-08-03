import { Component } from '@angular/core';
import { ContentsComponent } from '../../components/contents/contents.component'; // Ajuste o caminho conforme necessário
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ContentsComponent, AboutComponent] // Importe diretamente aqui
})
export class HomeComponent {
}
