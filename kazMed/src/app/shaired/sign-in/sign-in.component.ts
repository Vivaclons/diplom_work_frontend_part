import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formG: FormGroup;
  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.formG = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
      // , Validators.pattern('^[A-Za-z]')
    });
  }

  login() {
    this.auth.login(this.formG.getRawValue().userName, this.formG.getRawValue().passWord);
  }

  ngOnInit(): void {
  }

}
