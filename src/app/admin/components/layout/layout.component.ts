import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get user() {
    return this.authService.user!;
  }

  logout() {
    this.router.navigate(['']);
    this.authService.logout();
  }

}
