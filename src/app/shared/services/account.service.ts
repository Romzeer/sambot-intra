import { Injectable } from '@angular/core';
import { AuthService } from 'ng4-social-login';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  login(): void {
    this.authService.signIn('482273183967-uu4b32fenfbvmdnodc58l6nakfmppvn6');
  }

  logout(): void {
    this.authService.signOut();
  }
}

