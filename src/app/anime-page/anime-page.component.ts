import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';
import { EpisodesPageComponent } from '../episodes-page/episodes-page.component';
import { CharactersSectionComponent } from '../characters-section/characters-section.component';
import { FooterComponent } from '../footer/footer.component';
import { AnimeService } from '../../anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-page',
  standalone: true,
  imports: [
    HeaderComponent,
    AnimeDetailComponent,
    EpisodesPageComponent,
    CharactersSectionComponent,
    FooterComponent
  ],
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit {
  anime: any;
  characters: any[] = [];
  episodes: any[] = [];
  animeId: number = 0;
  animeTitle = '';

  private animeService = inject(AnimeService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const AID = this.route.snapshot.paramMap.get('id');
    this.animeId = AID ? +AID : 0;

    this.animeService.getAnimeDetails(this.animeId).subscribe((res: any) => {
      if (res?.data) {
        console.log("AnimeDetails:", res);
        this.anime = res.data;
        this.animeTitle=this.anime.title;
        this.animeService.searchAnime(this.animeTitle).subscribe((res: any) => {
          console.log("le nom est :",this.animeTitle)
          if (res?.results) {
            let animeInfo = res.results[0];
            for (let animeI of res.results) {
              if (animeI.episodes === this.anime.episodes) {
                animeInfo = animeI;
                break;
              }
            }
            console.log('Selected Anime:', animeInfo);
            console.log(res)
            this.animeService.getAnimeEpisodes(animeInfo.id).subscribe((res: any) => {
              if (res?.episodes) {
                this.episodes = res.episodes;
                console.log("les episodes :",this.episodes)
              } else {
                console.error('Characters data is not available or malformed');
              }
            });
          } else {
            console.error('Anime data is not available or malformed');
          }
        });
      }
    });


    this.animeService.getCharacters(this.animeId).subscribe((res: any) => {
      if (res?.data) {
        this.characters = res.data.slice(0, 12);
      } else {
        console.error('Characters data is not available or malformed');
      }
    });


  }
}
