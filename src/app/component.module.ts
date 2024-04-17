import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [

  ],
  exports: [
    NavComponent,
    DashboardComponent,
    ContactMeComponent,
    MatIconModule
  ]
})
export class ComponentsModule { }
