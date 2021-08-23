import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public isLoggedIn = false;

  public userName?: string;

  constructor(public authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.authService.userName$.subscribe((userName) => {
      this.userName = userName;
    });
  }

  onLoginClick() {
    if (this.authService.isAuthorised()) {
      this.authService.logout();
    }
    this.router.navigate(['/login']);
  }
}
