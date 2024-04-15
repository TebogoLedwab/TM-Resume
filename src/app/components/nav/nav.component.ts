import { Component } from '@angular/core';
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [DashboardComponent]
})
export class NavComponent {

}
