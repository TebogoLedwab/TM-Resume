import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';

@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    ContactMeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot([])
  ],
  providers: [],
  exports: [
    NavComponent,
    DashboardComponent,
    ContactMeComponent,
    AboutMeComponent,
    MatIconModule
  ]
})
export class ComponentsModule { }
