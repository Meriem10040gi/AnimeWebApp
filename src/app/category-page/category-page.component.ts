import {Component, inject, OnInit} from '@angular/core';
import {CategoryListComponent} from '../category-list/category-list.component';
import {HeaderComponent} from '../header/header.component';
import {AnimeService} from '../../anime.service';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-category-page',
  imports: [
    CategoryListComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './category-page.component.html',
  standalone: true,
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent implements OnInit{
  hide = true
  description = 'All Categories'
  categories : any[] = []
  private animeService = inject(AnimeService);
  ngOnInit(): void {
    this.animeService.getGenres().subscribe((res: any) => {
      this.categories = res.data;
    });
  }

}
