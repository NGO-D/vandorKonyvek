import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../auth/services/auth.service';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  opened: boolean;
  mode: string;
  menubutton = true;

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  
  constructor(matIconModule: MatIconModule,
              matSideNavModule: MatSidenavModule,
              matListModule: MatListModule,
              authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router: Router, ) 
              { 
    this.onResize();
  }

  ngOnInit(): void {
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

  onSignOut(): any {
    this.tokenStorageService.signOut(); {
    try {
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }
}
}