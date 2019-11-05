import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userlist: User[];

  constructor() {
    this.userlist = [
      {
        Id: 1, username: 'TonySlark', gamename: 'Dota2', photopath: './assets/img/user5.jpg',
        stream: '19.2K', videopath: './assets/img/video1.jpg', text: 'M ! T O | instagram.com/cemkarakoc'
      },
      {
        Id: 2, username: 'DartVader', gamename: 'Star Wars', photopath: './assets/img/user2.jpg',
        stream: '36.7K', videopath: './assets/img/video2.jpg', text: 'ONE MAN. ONE DEMON. ONE SERVER '
      },
      {
        Id: 3, username: 'KOMSERMESUT', gamename: 'CS:GO', photopath: './assets/img/user4.jpg',
        stream: '13.7K', videopath: './assets/img/video3.jpg', text: 'climbing | 1000 GIFTED SUBS - IF I FAIL '
      },
      {
        Id: 4, username: 'TEDMOSBEY', gamename: 'FIFA20', photopath: './assets/img/ted.jpg',
        stream: '32.9K', videopath: './assets/img/video4.jpg', text: 'S0L0 http://ymk.st/wandayss | !yemeks'
      },
      {
        Id: 5, username: 'BARNEYSTINSON', gamename: 'RUST', photopath: './assets/img/barney.jpg',
        stream: '21.7K', videopath: './assets/img/video5.jpg', text: 'be beyle bala bulada bamburleyli bap bup'
      },
      {
        Id: 6, username: 'DARWIN', gamename: 'AGE OF EMPIRES 2', photopath: './assets/img/user6.jpg',
        stream: '21.7K', videopath: './assets/img/video6.jpg', text: 'be beyle bala bulada bamburleyli bap bup'
      },
      {
        Id: 7, username: 'DARWIN', gamename: 'AGE OF EMPIRES 2', photopath: './assets/img/user6.jpg',
        stream: '21.7K', videopath: './assets/img/video7.jpg', text: 'Bootcamp: HKA Crash, VG Ian'
      },
      {
        Id: 8, username: 'KOMSERMESUT', gamename: 'CS:GO', photopath: './assets/img/user4.jpg',
        stream: '13.7K', videopath: './assets/img/video8.jpg', text: 'Rank 1 Kayn NA l 2 Challenger Account'
      }
    ];
  }

  public getAllUsers(): User[] {
    return this.userlist;
  }

  // public getAllSecondUsers(): User[]{
  //   return this.userlist.filter
  // }


  // public getFirstHalfUsers(): User[] {
  //   return this.userlist.filter((item, index) => index < 4);
  // }
  public getFirstHalfUsers(): User[] {
    return this.userlist;
  }

  public getOne(): User[] {
    return this.userlist.filter(x => x.Id = 2);
  }

}
