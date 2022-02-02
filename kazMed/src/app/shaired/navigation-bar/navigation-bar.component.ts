import { Component, OnInit } from '@angular/core';
import {SignInComponent} from "../sign-in/sign-in.component";
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signIn(){
    this.dialog.open(SignInComponent, {
      width: '500px'
    });
  }

  signUp(){
    this.dialog.open(SignUpComponent, {
      width: '500px'
    });
  }

}
