import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product-service';
import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('sliderRef') slider!: ElementRef<HTMLDivElement>;

  // 1. DATA VARIABLES
  searchTerm: string = '';
  allProducts: any[] = [];
  filteredProducts: any[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    // 2. LOAD DATA ON INIT
    this.allProducts = this.productService.getProducts();
    this.filteredProducts = [...this.allProducts];
  }

  ngAfterViewInit(): void {
    this.animateProductGrid();
  }

  // 3. SEARCH LOGIC
  filterProducts(): void {
    const term = this.searchTerm.toLowerCase();

    if (!term) {
      // If search is empty, reset to full list
      this.filteredProducts = [...this.allProducts];
    } else {
      // Filter based on Title or Category
      this.filteredProducts = this.allProducts.filter(product =>
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
  }

  //  GSAP ANIMATION
  animateProductGrid(): void {

    gsap.from(".product-card", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
      stagger: 0.1
    });
  }

  // 5. SCROLL
  scrollSlider(direction: number) {
    if (this.slider) {
      const container = this.slider.nativeElement;
      const scrollAmount = 340;

      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
