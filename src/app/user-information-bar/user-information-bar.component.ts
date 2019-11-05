import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-information-bar',
  templateUrl: './user-information-bar.component.html',
  styleUrls: ['./user-information-bar.component.css']
})
export class UserInformationBarComponent implements OnInit {
  userlist: User[];

  constructor(private userlistservice: UserService) { }



  ngOnInit() {
    this.userlist = this.userlistservice.getAllUsers();
  }

  openNav() {
    document.getElementById('mainsidebar').classList.remove('bar');
    document.getElementById('mainsidebar').classList.add('bar-open');

    document.getElementById('leftbar-id').classList.remove('leftbar');
    document.getElementById('leftbar-id').classList.add('leftbar-open');

    document.getElementById('brdv').className = 'bardiv2';
    document.getElementById('opndv').className = 'opendiv';
    // document.getElementById('middle-bar-ts').style.width = '100%';
    document.getElementById('middle-bar-ts').classList.remove('middlebar');
    document.getElementById('middle-bar-ts').classList.add('middlebar2');
    document.getElementById('shortshort').style.width = '80%';
    // document.getElementById('margin-yap').style.marginLeft = '50%';
  }

  closeNav() {
    document.getElementById('mainsidebar').classList.remove('bar-open');
    document.getElementById('mainsidebar').classList.add('bar');

    document.getElementById('leftbar-id').classList.remove('leftbar-open');
    document.getElementById('leftbar-id').classList.add('leftbar');

    document.getElementById('middle-bar-ts').classList.remove('middlebar2');
    document.getElementById('middle-bar-ts').classList.add('middlebar');

    document.getElementById('brdv').className = 'bardiv';
    document.getElementById('opndv').className = 'opendiv2';
    document.getElementById('middle-bar-ts').style.width = '100%';
    document.getElementById('shortshort').style.width = '100%';
    document.getElementById('card-width').style.width = '25%';
    // document.getElementById('middle-bar-ts').style.marginLeft = '50px';
  }

}
