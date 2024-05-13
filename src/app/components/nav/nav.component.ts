import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
})
export class NavComponent {
    constructor (){}

    scrollTo (to: string) {
        switch (to) {
          case 'home':
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            break;
    
          case 'about-me':
            document.querySelector('.about-me-body')?.scrollIntoView({
                behavior: 'smooth',
            });
            // document.querySelector('.about-me-body').scrollIntoView({
            //   behavior: 'smooth',
            // });
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
