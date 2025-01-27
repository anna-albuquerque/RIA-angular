import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  //templateUrl: './app.component.html',
  template:
      <main class="main">
          <div class="content">
            <div class="left-side">
              <h1>Hello, {{ name }}</h1>
              <label for="name">Name: </label>
              <input [(ngModel)]="name">
            </div>
          </div>
      </main>
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular';
  name = ''
}
