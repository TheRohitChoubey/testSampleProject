import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
email: string
registerForm: FormGroup
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl("",Validators.compose([
        Validators.required,Validators.email
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,Validators.minLength(6),Validators.maxLength(30)
      ])),
      confirmPassword: new FormControl("",Validators.compose([
        Validators.required,Validators.minLength(6),Validators.maxLength(30)
      ])),
      fname: new FormControl("",Validators.compose([
        Validators.required,Validators.minLength(1),Validators.maxLength(30)
      ])),
      lname: new FormControl("",Validators.compose([
        Validators.required,Validators.minLength(1),Validators.maxLength(30)
      ])),
      gender: new FormControl("Choose Gender",  Validators.required),
      dob: new FormControl("", Validators.required),
      username: new FormControl("",Validators.compose([
        Validators.required,Validators.minLength(1),Validators.maxLength(30)
      ])),
      phoneNumber: new FormControl("", Validators.compose([
        Validators.required,Validators.minLength(1),Validators.maxLength(12)
      ])),
    })
  }

  submit() {
    let newEmail = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    let fname = this.registerForm.value.fname;
    let lname = this.registerForm.value.lname;
    let gender = this.registerForm.value.gender;
    let dob = this.registerForm.value.dob;
    let phoneNumber = this.registerForm.value.phoneNumber;
    let username = this.registerForm.value.username;

    console.log(gender)

    let player = {
      email : newEmail,
      password : password,
      fname : fname,
      lname : lname,
      gender : gender,
      dob : dob,
      phoneNumber : phoneNumber,
      username : username
    }

    if(localStorage.getItem(newEmail)){
      alert("User already exist")
    } else{
      localStorage.setItem(newEmail, JSON.stringify(player));
      alert("User Registered Successfully");
      this.router.navigate(['/login']);
    }
  }

  emailDataValidator(control: FormControl) {
    let email = control.value;
  }

  validateDOB(e){
    let dob = new Date(e);
    let today = new Date();
    console.log(dob,today)
    if(dob >= today){
      false
    } else {
      true
    }
  }



}
