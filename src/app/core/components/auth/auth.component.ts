import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  private loginSubscription?: Subscription;

  private userNameSubscription?: Subscription;

  public isLoggedIn = false;

  public userName?: string;

  constructor(public authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.loginSubscription = this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.userNameSubscription = this.authService.userName$.subscribe((userName) => {
      this.userName = userName;
    });
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
    this.userNameSubscription?.unsubscribe();
  }

  onLoginClick() {
    if (this.authService.isAuthorised()) {
      this.authService.logout();
    }
    this.router.navigate(['/login']);
  }
}
