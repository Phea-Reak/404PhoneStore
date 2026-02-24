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
  loading: boolean = true;
  error: string = '';

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.allProducts = products.map(p => ({
          ...p,
          name: p.title,
          images: [p.image],
          stock: Math.floor(Math.random() * 20) + 1,
          status: 'active',
          price: p.price.toString()
        }));
        this.filteredProducts = [...this.allProducts];
        this.loading = false;
        setTimeout(() => this.animateProductGrid(), 100);
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.error = 'Failed to load products';
        this.loading = false;
      }
    });
  }

  ngAfterViewInit(): void {
  }

  filterProducts(): void {
    const term = this.searchTerm.toLowerCase();

    if (!term) {
      this.filteredProducts = [...this.allProducts];
    } else {
      this.filteredProducts = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
  }

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
