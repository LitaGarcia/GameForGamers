import { Component } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-gamescard',
  templateUrl: './gamescard.component.html',
  styleUrls: ['./gamescard.component.css'],
})
export class GamescardComponent {
  games!: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.getAllGames().subscribe((resp: Game[]) => {
      this.games! = resp;
    });
  }
}
