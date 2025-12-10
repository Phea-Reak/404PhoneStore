import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home'; // <--- 1. Import the component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent], // <--- 2. Add it to the imports array
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
