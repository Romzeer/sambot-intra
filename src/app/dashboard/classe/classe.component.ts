import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
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
    selector: 'app-classe',
    templateUrl: './classe.component.html',
    styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  public dataresponse;
  constructor(
    private router: Router,
    private http: HttpClient,


  ) { }

  ngOnInit() {
    this.http.get<UserResponse>('https://api.mlab.com/api/1/databases/eemi/collections/students?apiKey=7yXH8gWzEsb-XQintIWVhxDWmDpHqwoG')
      .subscribe(data => {

        this.dataresponse = data;
        // let i = 0;
        // for (i = 0; i < 4; i++) {
        //   console.log(data);
        //   console.log('Nom:' + data[i].nom);
        //   console.log('Prenom:' + data[i].prenom);
        //   console.log('Age:' + data[i].age);
        //   console.log('Classe:' + data[i].classe);
        //   console.log('Email:' + data[i].email);
        //   console.log('Photo:' + data[i].photo);
        // }


      });
  }

}
