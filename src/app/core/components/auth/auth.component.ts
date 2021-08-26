import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  private userSubscription?: Subscription;

  public user: User | null = null;

  constructor(public authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }

  onLoginClick() {
    if (this.authService.isAuthorised()) {
      this.authService.logout();
    }
    this.router.navigate(['/login']);
  }
}
