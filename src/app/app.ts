import { Component } from '@angular/core';
import {RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { FormsModule } from "@angular/forms";
import { ProductDetail } from "./product-detail/product-detail";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
     RouterLink,
     HomeComponent,
     ProductDetail

    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
