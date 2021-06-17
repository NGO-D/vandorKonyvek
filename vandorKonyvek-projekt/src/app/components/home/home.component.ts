import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean;
  mode: string;
  menubutton = true;

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  constructor(matIconModule: MatIconModule,
              matSideNavModule: MatSidenavModule,
              matListModule: MatListModule,
              authService: AuthService) 
              { 
    this.onResize();
  }

  ngOnInit() {
  }

  onResize() {
    if (window.screen.width <= 1199) {
      this.opened = false;
      this.menubutton = true;
      this.mode = "over";
    } else {
      this.opened = true;
      this.mode = "side";
      this.menubutton = false;
    }
  }

  menuToggle() {
    this.sidenav.toggle();
  }

}