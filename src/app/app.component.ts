import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DashboardComponent, NavComponent]
})
export class AppComponent {
  title = 'my-resume';
}
