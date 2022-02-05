import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "./request.service";
import {SignInComponent} from "./shaired/sign-in/sign-in.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];
  private isAuth = false;
  constructor(private router: Router, private service: RequestService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  login(email: string, password: string): boolean {
    this.getAllUsers();
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email && this.users[i].password === password) {
        this.isAuth = true;
        localStorage.setItem('email', this.users[i].email);
        return true;
      }
    }
    return false;
  }

  check() {
    if (this.isAuth !== true) {
      alert('You are not authorized as User. Please return back');
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('userName');
    this.router.navigate(['../home']);
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('userName')) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
