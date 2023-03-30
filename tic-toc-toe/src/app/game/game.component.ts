import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../interface/Player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  username:string
  email : string
  storedPlayer: Player
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.email = JSON.parse(localStorage.getItem('login'))
  this.storedPlayer = JSON.parse(localStorage.getItem(this.email))
  if(!this.email){
    this.router.navigate(['/login']);
  } else {
    this.storedPlayer = JSON.parse(localStorage.getItem(this.email))
    this.username = this.storedPlayer.username
  }
}

clear(){
  localStorage.removeItem('login')
  this.router.navigate(['/login']);
}

}
