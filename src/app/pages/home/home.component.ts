import { Component } from '@angular/core';
import { ContentsComponent } from '../../components/contents/contents.component'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ContentsComponent] // Importe diretamente aqui
})
export class HomeComponent {
}
