import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, forkJoin, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private jikanBase = 'https://api.jikan.moe/v4';
  private consumetBase ='http://localhost:3000/anime/zoro';
  constructor(private http: HttpClient) {}
  getGenres(): Observable<any> {
    const excludedGenres = ['Boys Love', 'Girls Love', 'Ecchi', 'Erotica','Hentai','Harem','Magical Sex Shift']; // les genres à exclure
    return this.http.get<any>(`${this.jikanBase}/genres/anime`).pipe(
      map(response => {
        return {
          ...response,
          data: response.data.filter((genre: any) => !excludedGenres.includes(genre.name))
        };
      })
    );
  }
  getAnimeByGenre(genreId: number,page: number): Observable<any> {
    const excludedRatings = ['R+ - Mild Nudity','Rx - Hentai'];
    const excludedGenres = ['Boys Love', 'Girls Love', 'Ecchi', 'Erotica','Hentai','Harem','Magical Sex Shift'];
    return this.http.get<any>(`${this.jikanBase}/anime?genres=${genreId}&filter=bypopularity&page=${page}`).pipe(
      map(response => {
        return {
          ...response,
          data: response.data
            .filter((anime: any) => !excludedRatings.includes(anime.rating)) // Filtrer par rating
            .filter((anime: any) => !excludedGenres.some((excludedGenre: string) => anime.genres.some((genre: any) => genre.name === excludedGenre))) // Filtrer par genre
        };
      })
    );
  }
  getPopularAnimes(page: number = 1): Observable<any> {
    const excludedRatings = ['R+ - Mild Nudity','Rx - Hentai'];
    const excludedGenres = ['Boys Love', 'Girls Love', 'Ecchi', 'Erotica','Hentai','Harem','Magical Sex Shift'];
    return this.http.get<any>(`${this.jikanBase}/top/anime?filter=bypopularity&page=${page}`).pipe(
      map(response => {
        return {
          ...response,
          data: response.data
            .filter((anime: any) => !excludedRatings.includes(anime.rating)) // Filtrer par rating
            .filter((anime: any) => !excludedGenres.some((excludedGenre: string) => anime.genres.some((genre: any) => genre.name === excludedGenre))) // Filtrer par genre
        };
      })
    );
  }

  getRecentAnimes(page: number = 1): Observable<any> {
    const excludedRatings = ['R+ - Mild Nudity','Rx - Hentai'];
    const excludedGenres = ['Boys Love', 'Girls Love', 'Ecchi', 'Erotica','Hentai','Harem','Magical Sex Shift'];
    return this.http.get<any>(`${this.jikanBase}/seasons/now?page=${page}`).pipe(
        map(response => {
          return {
            ...response,
            data: response.data
              .filter((anime: any) => !excludedRatings.includes(anime.rating)) // Filtrer par rating
              .filter((anime: any) => !excludedGenres.some((excludedGenre: string) => anime.genres.some((genre: any) => genre.name === excludedGenre))) // Filtrer par genre
          };
        })
      );
  }
  getAllAnimes(page: number = 1): Observable<any> {
    const excludedRatings = ['R+ - Mild Nudity','Rx - Hentai'];
    const excludedGenres = ['Boys Love', 'Girls Love', 'Ecchi', 'Erotica','Hentai','Harem','Magical Sex Shift'];
    return this.http.get<any>(`${this.jikanBase}/anime?page=${page}`).pipe(
      map(response => {
        return {
          ...response,
          data: response.data
            .filter((anime: any) => !excludedRatings.includes(anime.rating)) // Filtrer par rating
            .filter((anime: any) => !excludedGenres.some((excludedGenre: string) => anime.genres.some((genre: any) => genre.name === excludedGenre))) // Filtrer par genre
        };
      })
    );
  }


  getAnimeDetails(animeId: number): Observable<any> {
    return this.http.get(`${this.jikanBase}/anime/${animeId}/full`);
  }
  getCharacters(animeId: number): Observable<any> {
    return this.http.get(`${this.jikanBase}/anime/${animeId}/characters`);
  }
  searchAnime(query: string): Observable<any> {
    return this.http.get(`${this.consumetBase}/${query}`);
  }

  getAnimeEpisodes(id: string): Observable<any> {
    return this.http.get(`${this.consumetBase}/info?id=${id}`);
  }

}
