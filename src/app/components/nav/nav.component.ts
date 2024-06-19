import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const navEl = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
        navEl?.classList.add('navbar-scrolled');
      } else if (window.scrollY < 56) {
        navEl?.classList.remove('navbar-scrolled');
      }
    });
  }

  scrollTo(to: string) {
    switch (to) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;

      case 'about':
        document.querySelector('.about-me')?.scrollIntoView({
          behavior: 'smooth',
        });
        break;

      case 'contact':
        document.querySelector('.contact')?.scrollIntoView({
          behavior: 'smooth',
        });
        break;

      default:
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
    }
  }

}
