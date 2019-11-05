import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Game } from '../game';
import { UserService } from '../user.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-videos-screens',
  templateUrl: './videos-screens.component.html',
  styleUrls: ['./videos-screens.component.css']
})

export class VideosScreensComponent implements OnInit {
  userlist: User[];
  userlist2: User[];
  userlist3: User[];
  gamelist: Game[];


  constructor(private userlistService: UserService, private gamelistService: GameService) { }

  ngOnInit() {
    this.userlist = this.userlistService.getAllUsers();
    this.gamelist = this.gamelistService.getAllGames();
    this.userlist2 = this.userlistService.getFirstHalfUsers();
    this.userlist3 = this.userlistService.getOne();
  }



  showmore() {
    document.getElementById('removesection').classList.remove('cards');
    document.getElementById('removesection').classList.add('cards2');
    document.getElementById('opensection').classList.remove('cards2');
    document.getElementById('opensection').classList.add('cards');

    console.log(this.userlist);
    console.log(this.userlist2);

    document.getElementById('hidden1').style.display = 'none';
    document.getElementById('hidden2').style.display = 'none';
    document.getElementById('hidden3').style.display = 'none';
  }

  closeLog() {
    const closeLogin = document.getElementById('login-id');
    closeLogin.classList.remove('log-In');
    closeLogin.classList.add('log-In2');

    const closeClose = document.getElementById('close-id');
    closeClose.classList.remove('close-div');
    closeClose.classList.add('close-div2');
  }

  signCloseLog() {
    const signcloseLogin = document.getElementById('sign-up-id');
    signcloseLogin.classList.remove('sign-up');
    signcloseLogin.classList.add('sign-up2');

    const signcloseClose = document.getElementById('sign-close-id');
    signcloseClose.classList.remove('sign-close-div');
    signcloseClose.classList.add('sign-close-div2');
  }

  passSign() {
    const kapatLog = document.getElementById('login-id');
    kapatLog.classList.remove('log-In');
    kapatLog.classList.add('log-In2');

    const kapatClose = document.getElementById('close-id');
    kapatClose.classList.remove('close-div');
    kapatClose.classList.add('close-div2');

    const acSign = document.getElementById('sign-up-id');
    acSign.classList.remove('sign-up2');
    acSign.classList.add('sign-up');

    const acClose = document.getElementById('sign-close-id');
    acClose.classList.remove('sign-close-div2');
    acClose.classList.add('sign-close-div');
  }

  passLog() {

    const kapatLog2 = document.getElementById('login-id');
    kapatLog2.classList.remove('log-In2');
    kapatLog2.classList.add('log-In');

    const kapatClose2 = document.getElementById('close-id');
    kapatClose2.classList.remove('close-div2');
    kapatClose2.classList.add('close-div');

    const acSign2 = document.getElementById('sign-up-id');
    acSign2.classList.remove('sign-up');
    acSign2.classList.add('sign-up2');

    const acClose2 = document.getElementById('sign-close-id');
    acClose2.classList.remove('sign-close-div');
    acClose2.classList.add('sign-close-div2');
  }

}
