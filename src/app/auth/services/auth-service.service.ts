import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private user = new BehaviorSubject<User | null>(this.getUser());

  public user$ = this.user.asObservable();

  /* eslint-disable-next-line */
  login(userName: string, password: string): boolean {
    localStorage.setItem('userName', userName);
    localStorage.setItem('token', String(Math.ceil(Math.random() * 100)));
    this.user.next({ name: userName });
    return true;
  }

  logout(): boolean {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    this.user.next(null);
    return true;
  }

  isAuthorised(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUser(): User | null {
    if (!this.isAuthorised()) return null;
    const userName = localStorage.getItem('userName');
    return { name: userName !== null ? userName : '' };
  }
}
