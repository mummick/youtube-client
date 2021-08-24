import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(public authService: AuthServiceService, private router: Router) {}

  onLoginClick() {
    if (this.authService.isAuthorised()) {
      this.authService.logout();
    }
    this.router.navigate(['/login']);
  }
}
