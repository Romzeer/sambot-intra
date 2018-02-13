import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginBtn() {
  }

  login() {
    this.accountService.login();
    this.router.navigateByUrl('/dashboard');
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
