import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isLoggedIn = new BehaviorSubject(this.isAuthorised());

  public isLoggedIn$ = this.isLoggedIn.asObservable();

  private userName = new BehaviorSubject<string | undefined>(this.getUserName());

  public userName$ = this.userName.asObservable();

  /* eslint-disable-next-line */
  login(user: string, password: string): boolean {
    localStorage.setItem('user', user);
    localStorage.setItem('token', String(Math.ceil(Math.random() * 100)));
    this.isLoggedIn.next(true);
    this.userName.next(user);
    return true;
  }

  logout(): boolean {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.userName.next(undefined);
    return true;
  }

  isAuthorised(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUserName(): string | undefined {
    const user = localStorage.getItem('user');
    return user !== null ? user : undefined;
  }
}
