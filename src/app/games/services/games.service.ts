import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Game, GetAllGamesResponse } from '../interfaces/game.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private GAME_API_HOST: string = environment.GAME_API_HOST;

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    //TODO: Better way to write params
    return this.http
      .get<GetAllGamesResponse>(
        `${this.GAME_API_HOST}api/games?key=dd12649b804c41c1805049bc6b5c5803`
      )
      .pipe(
        map((resp) => {
          return resp.results;
        })
      );
  }
}
