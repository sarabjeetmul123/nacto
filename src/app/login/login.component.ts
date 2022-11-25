import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginService } from '../services/login.service';
// import { MyserviceService } from './myservice.service';

import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  siteKey: string = '';
  

  constructor(private route: Router, private login: LoginService) {
    this.siteKey = '6LcF9HobAAAAAEJnnfYnAdAi1fY1LJbZbI5Bb3IO';
  }

  ngOnInit(): void {}
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    captcha: new FormControl('', Validators.required)
  });

  logInUser() {
    if (this.formGroup.valid)
    {
      // if (this.formGroup.value.password == '123456') {
      // if (this.siteKey == '6LcF9HobAAAAAEJnnfYnAdAi1fY1LJbZbI5Bb3IO')
      // {
        
        console.log(
          'welcome to dashboard, your email is = ' + this.formGroup.value.email
        );
      

        // username= this.formGroup.value.email,
        // password= this.formGroup.value.password,
        this.login
          .getAll(this.formGroup.value.email, this.formGroup.value.password)
          .subscribe((res) => {
            // console.log(res['res']);

            if (res['res'] == 'Logged in successfully')
            {
              // console.log('If satisfied');
              this.route.navigate(['./calculator1']);
              // alert("welcome to dashboard")
              localStorage.setItem(
                'doctor_data',
                JSON.stringify(this.formGroup.value.email)
              );
              localStorage.setItem('loggedin', 'true');
              localStorage.removeItem('patient_data');
            } else
            {
              console.log('unauthorised user');
              alert(res['res']);
            }
          });
      }
    // }
  }
}
