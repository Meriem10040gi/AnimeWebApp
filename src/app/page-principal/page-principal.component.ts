import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {BannerComponent} from '../banner/banner.component';
import {CategoryListComponent} from '../category-list/category-list.component';
import {AnimeListComponent} from '../anime-list/anime-list.component';
import {FooterComponent} from '../footer/footer.component';
import {AnimeService} from '../../anime.service';

@Component({
  selector: 'app-page-principal',
  imports: [
    HeaderComponent,
    BannerComponent,
    CategoryListComponent,
    AnimeListComponent,
    FooterComponent
  ],
  templateUrl: './page-principal.component.html',
  standalone: true,
  styleUrl: './page-principal.component.css'
})
export class PagePrincipalComponent implements OnInit{
  categories : any[] = []
  MPanimes : any[] = []
  RLanimes : any[] = []
  private animeService = inject(AnimeService);
  ngOnInit(): void {
    this.animeService.getGenres().subscribe((res: any) => {
      this.categories = res.data.slice(0, 16);
     });
    this.animeService.getPopularAnimes().subscribe((res: any)=>{
      this.MPanimes = res.data.slice(0,24);
    });
    this.animeService.getRecentAnimes().subscribe((res: any)=>{
      this.RLanimes = res.data.slice(0,24);
    });
}
}
