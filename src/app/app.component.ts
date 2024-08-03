import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentsComponent } from './components/contents/contents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, ContentsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Project_DEPPI';
}
