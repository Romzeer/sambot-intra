import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'ng4-social-login';
import { SocialUser } from 'ng4-social-login';

interface UserResponse {
  nom: string;
  prenom: string;
  age: number;
  classe: string;
  email: string;
  photo: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public dataresponse;


  public user: SocialUser;
  private loggedIn: boolean;

  firstName: string;
  lastName: string;
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService

  ) { }

  ngOnInit() {
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }

}
