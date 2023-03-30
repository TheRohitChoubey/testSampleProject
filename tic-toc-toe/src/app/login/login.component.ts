import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../interface/Player';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
storedPlayer : Player
email : string
emailForm:FormGroup
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      email: new FormControl("",Validators.compose([
        Validators.required,Validators.email
      ])),
      password : new FormControl("",Validators.compose([
        Validators.required
      ]))
  })
  let email = localStorage.getItem('login')
  if(email){
    this.router.navigate(['/game']);
  }
}

  submit() {
    let email = this.emailForm.value.email;
    let password = this.emailForm.value.password;
    this.storedPlayer  = JSON.parse(localStorage.getItem(email));
    console.log(this.storedPlayer);
    if(this.storedPlayer){
        if(password == this.storedPlayer.password){
        localStorage.setItem('login',JSON.stringify(email));
          this.router.navigate(['/game']);
        }
        else
          alert('Incorrect Password');
    } else {
        alert('User not found');
    }
  }

}