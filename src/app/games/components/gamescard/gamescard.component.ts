import { Component } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { GamesService } from '../../services/games.service';

export enum genreType {
  Adventure = 'warning',
  RPG = 'success',
  Action = 'primary',
  Shooter = 'info',
  Puzzle = 'danger',
  Indie = 'info',
  Platformer = 'info',
  Massively = 'info',
  Multiplayer = 'info',
}

@Component({
  selector: 'app-gamescard',
  templateUrl: './gamescard.component.html',
  styleUrls: ['./gamescard.component.css'],
})
export class GamescardComponent {
  games!: Game[];

  gameRating(rate: number): number {
    return Math.floor(rate);
  }

  genreStyle(genre: string) {
    return genreType[genre as keyof typeof genreType];
  }

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.getAllGames().subscribe((resp: Game[]) => {
      this.games! = resp;
    });
  }
}
