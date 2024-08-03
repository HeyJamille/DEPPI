import { Component } from '@angular/core';
import { ContentsComponent } from '../../components/contents/contents.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
