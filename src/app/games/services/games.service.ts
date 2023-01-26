import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private GAME_API_HOST: string = environment.GAME_API_HOST;

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    //TODO: Better way to write params
    return this.http.get<Game[]>(
      `${this.GAME_API_HOST}api/games?sort-by=alphabetical`,
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            '72a6367519msh255420edd8b174cp1764a5jsnf8b097f6bcd5',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        }),
      }
    );
  }
}
