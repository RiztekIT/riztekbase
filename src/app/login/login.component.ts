import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navegar(){
    // this.router.navigateByUrl('progress');    
    // this.router.navigate(['/dashboard']);
    // this.http.post('#');

  }

}
