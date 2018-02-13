import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/services/account.service';
import { Router } from '@angular/router';
import { SocialUser, AuthService } from 'ng4-social-login';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  nom: string;
  prenom: string;
  age: number;
  classe: string;
  email: string;
  photo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user: SocialUser;
  private loggedIn = false;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user == null) {
        this.router.navigateByUrl('/login');
      } else {
        if (this.user.email) {
          const idx = this.user.email.lastIndexOf('@');
          if (idx > -1 && this.user.email.slice(idx + 1) === 'eemi.com') {
            this.loggedIn = (user != null);
            this.router.navigateByUrl('/dashboard');
          } else {
            this.accountService.logout();
            this.router.navigateByUrl('/login');
          }
        }
      }
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }

}

