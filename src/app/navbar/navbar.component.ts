import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLogin() {
    const changelog = document.getElementById('login-id');
    changelog.classList.remove('log-In2');
    changelog.classList.add('log-In');

    const changeclose = document.getElementById('close-id');
    changeclose.classList.remove('close-div2');
    changeclose.classList.add('close-div');
  }

  openSign() {
    const changeSign = document.getElementById('sign-up-id');
    changeSign.classList.remove('sign-up2');
    changeSign.classList.add('sign-up')

    const changeclose2 = document.getElementById('sign-close-id');
    changeclose2.classList.remove('sign-close-div2');
    changeclose2.classList.add('sign-close-div');
  }



}
