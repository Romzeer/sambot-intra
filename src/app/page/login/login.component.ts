import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';
import { AuthService } from 'ng4-social-login';
import { SocialUser } from 'ng4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginBtn() {
  }

  login() {
    this.accountService.login();
    this.authService.authState.subscribe((user) => {
      if(user){
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
