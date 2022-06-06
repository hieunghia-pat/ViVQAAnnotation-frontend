import { Component, OnInit, ElementRef, Renderer2, Input, AfterViewInit, AfterViewChecked } from '@angular/core';


@Component({

  selector: 'app-image-slider',

  templateUrl: './image-slider.component.html',

  styleUrls: ['./image-slider.component.css']

})

export class ImageSliderComponent implements OnInit {

  @Input() imagesData : String = 'https://tse2.mm.bing.net/th?id=OIP.3HqD3gjGShfdWJ-XowfgagHaE8&pid=Api&w=1200&h=800&rs=1&p=0';

  slideIndex = 1;

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }


  ngOnInit() {
  }


  // ngAfterViewChecked () {

  //   this.showSlides(1);

  // }


  // showSlides(n : number) {

  //   let i;

  //   const slides = this.el.nativeElement.querySelectorAll('.mySlides');

  //   const dots = this.el.nativeElement.querySelectorAll('.dot');

  //   if (n > slides.length) {

  //     this.slideIndex = 1;
      
  //   }

  //   if (n < 1) {

  //     this.slideIndex = slides.length;

  //   }

  //   for (i = 0; i < slides.length; i++) {

  //     this.renderer.setStyle(slides[i], 'display', 'none');

  //   }

  //   for (i = 0; i < dots.length; i++) {

  //     dots[i].className = dots[i].className.replace(' active', '');

  //   }

  //   this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');

  //   dots[this.slideIndex - 1].className += ' active';

  // }
  // plusSlides(n : number) {

  //   this.showSlides(this.slideIndex += n);

  // }

  // currentSlide(n : number) {

  //   this.showSlides(this.slideIndex = n);

  // }
}
