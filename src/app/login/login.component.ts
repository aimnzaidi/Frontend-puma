import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { adidasserviceService } from '../adidasservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  email: any;
  password: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: adidasserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
      login() {

        if(this.email == "Ronaldo@gmail.com" && this.password == '12345'){
          alert("Welcome to adidas Administrative Page")
          this.router.navigate(['home'])
        }
        else if (this.email == "Tonykross@gmail.com" && this.password == '12345'){
          alert("Welcome to adidas Administrative Page")
          this.router.navigate(['home'])
    
        }
        else if (this.email == "Benzema@gmail.com" && this.password == '12345'){
          alert("Welcome to Champ Zone Run Administrative Page")
          this.router.navigate(['home'])
    
        }
        else if
        (this.email == "Granacho@gmail.com" && this.password == '12345'){
          alert("Welcome to adidas Administrative Page")
          this.router.navigate(['custpage'])
    
        }
        else{
          alert("You are not an administrator!!")
        }
    
      }
    
    }

