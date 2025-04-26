import {Component, inject, OnInit} from '@angular/core';
import {AnimeService} from '../../anime.service';
import {ActivatedRoute} from '@angular/router';
import {AnimeListComponent} from '../anime-list/anime-list.component';
import {BannerComponent} from '../banner/banner.component';
import {CategoryListComponent} from '../category-list/category-list.component';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-all-anime-page',
  imports: [
    AnimeListComponent,
    BannerComponent,
    CategoryListComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './all-anime-page.component.html',
  standalone: true,
  styleUrl: './all-anime-page.component.css'
})
export class AllAnimePageComponent implements OnInit{
  type : string | undefined
  animes : any[] = []
  description : string | undefined
  animeId = 0;
  currentPage = 1;
  hasNextPage = false;
  private animeService = inject(AnimeService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') || '';
    const AID = this.route.snapshot.paramMap.get('id');
    this.animeId = AID ? +AID : 0;
    this.loadAnimes();
  }

  loadAnimes(): void {
    if(this.animeId > 0){
      this.description = '';
      this.animeService.getAnimeByGenre(this.animeId,this.currentPage).subscribe((res: any) => {
        this.animes = res.data;
        this.hasNextPage = res.pagination?.has_next_page;
      });
    }

    if (this.type === 'most-popular') {
      this.description = 'Most Popular';
      this.animeService.getPopularAnimes(this.currentPage).subscribe((res: any) => {
        this.animes = res.data;
        this.hasNextPage = res.pagination?.has_next_page;
      });
    }

    if (this.type === 'new-released') {
      this.description = 'Recently Released';
      this.animeService.getRecentAnimes(this.currentPage).subscribe((res: any) => {
        this.animes = res.data;
        this.hasNextPage = res.pagination?.has_next_page;
      });
    }

    if (this.type === 'all') {
      this.description = 'All';
      this.animeService.getAllAnimes(this.currentPage).subscribe((res: any) => {
        this.animes = res.data;
        this.hasNextPage = res.pagination?.has_next_page;
      });
    }
  }
  nextPage(): void {
    if (this.hasNextPage) {
      this.currentPage++;
      this.loadAnimes();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadAnimes();
    }
  }

}
