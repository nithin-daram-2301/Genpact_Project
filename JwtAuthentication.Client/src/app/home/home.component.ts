import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Array of reviews for the review rotation section
  reviews = [
    { text: 'Amazing experience! The Kerala trip was unforgettable.', author: 'Sarah' },
    { text: "Goa was a paradise! I can't wait to go back.", author: 'Mike' },
    { text: "Delhi's culture is rich and vibrant! A must-visit.", author: 'Emily' }
  ];

  // Array of slides for the carousel section
  slides = [
    {
      image: 'assets/Images/slide1.jpg',
      alt: 'First slide',
      
    },
    {
      image: 'assets/Images/slide2.jpg',
      alt: 'Second slide',
     
    
    },
    {
      image: 'assets/Images/slide3.jpg',
      alt: 'Third slide',
    
    },
    {
      image: 'assets/Images/slide4.jpg',
      alt: 'Third slide',
    
    },
    {
      image: 'assets/Images/slide5.jpg',
      alt: 'Third slide',
    
    }
  ];

  // Variables to keep track of the current review and carousel slide
  currentReviewIndex = 0;
  activeSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // Start the review and carousel rotation when the component is initialized
    this.startReviewRotation();
    this.startCarouselRotation();
  }

  // Method to rotate the reviews every 3 seconds
  startReviewRotation(): void {
    setInterval(() => {
      this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
    }, 3000); // Rotate reviews every 3 seconds
  }

  // Method to rotate carousel slides every 5 seconds
  startCarouselRotation(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Rotate carousel slides every 5 seconds
  }

  // Set a specific slide as active
  setActiveSlide(index: number): void {
    this.activeSlideIndex = index;
  }

  // Move to the next slide
  nextSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }

  // Move to the previous slide
  prevSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
