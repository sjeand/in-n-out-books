/*
==========================================
Title: in-n-out book
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/26/2021
  Description: final deployment
==========================================
*/

// import statement
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// export class
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
