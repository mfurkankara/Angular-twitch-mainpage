import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamelist: Game[];

  constructor() {
    this.gamelist = [
      {name: 'Just Chatting', viewers: '68.1K viewers', photopath: './assets/img/JUST.jpg', type: 'IRL'},
      {name: 'League of legends', viewers: '105K viewers', photopath: './assets/img/LOL.jpg', type: 'MOBA'},
      {name: 'Counter-Strike', viewers: '69K viewers', photopath: './assets/img/CSGO.jpg', type: 'FPS'},
      {name: 'PUBG', viewers: '47.9K viewers', photopath: './assets/img/PUBG.jpg', type: 'FPS'},
      {name: 'Fortnite', viewers: '17.2K viewers', photopath: './assets/img/FORTNITE.jpg', type: 'Shooter'},
      {name: 'Teamfight Tactics', viewers: '618 viewers', photopath: './assets/img/TT.jpg', type: 'Strategy'},
      {name: 'Legends of Runeterra', viewers: '31.4K viewers', photopath: './assets/img/LOR.jpg', type: 'Card&Board Game'},
      {name: 'FIFA 20', viewers: '20.9K viewers', photopath: './assets/img/FIFA20.jpg', type: 'Sports Game'}
    ];
  }
  public getAllGames(): Game[] {
    return this.gamelist;
  }

}
