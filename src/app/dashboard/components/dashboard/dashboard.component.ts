import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('drawer') drawer: MatSidenav | undefined;
sideNavOpen=true;
  ngAfterViewInit(): void {
  // this.drawer?.toggle()
}
}
