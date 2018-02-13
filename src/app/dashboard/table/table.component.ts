import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface UserResponse {
  prof: string;
  matiere: string;
  note: number;
  coeff: number;
  date: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public dataresponse;

  prof: string;
  matiere: string;
  note: number;
  coeff: number;
  date: any;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    // this.prof = '';
    // this.matiere = 'dev';
    // this.note = 15;
    // this.coeff = 1;
    // this.date = '';
    this.http.get<UserResponse>('https://api.mlab.com/api/1/databases/eemi/collections/notes?apiKey=7yXH8gWzEsb-XQintIWVhxDWmDpHqwoG')
      .subscribe(data => {

        this.dataresponse = data;
        // let i = 0;
        // for (i = 0; i < 4; i++) {
        //   console.log(data);
        //   console.log('Eleve:' + data[i].Eleve);
        //   console.log('Matiere:' + data[i].Matiere);
        //   console.log('Note:' + data[i].Note);
        //   console.log('Coeff:' + data[i].Coeff);
        //   console.log('Date:' + data[i].Date);
        // }

      });
  }
}
