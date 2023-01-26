import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private API: string = environment.API;

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    //TODO: Better way to write params
    return this.http.get<Game[]>(`${this.API}.?sort-by=alphabetical`);
  }
}
