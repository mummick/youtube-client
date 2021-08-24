import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: string = '';

  public password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  onLoginClick() {
    this.authService.login(this.user, this.password);
    this.router.navigate(['/']);
  }
}
