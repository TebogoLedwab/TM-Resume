import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [
    { path: 'home', component: DashboardComponent},
    { path: '/about-me', component: AboutMeComponent},
    { path: '/contact', component: ContactMeComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
