import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public userName?: string;

  constructor() {
    const user = localStorage.getItem('user');
    this.userName = user !== null ? user : undefined;
  }

  /* eslint-disable-next-line */
  login(user: string, password: string): boolean {
    localStorage.setItem('user', user);
    localStorage.setItem('token', String(Math.ceil(Math.random() * 100)));
    this.userName = user;
    return true;
  }

  logout(): boolean {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userName = undefined;
    return true;
  }

  isAuthorised(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
