import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import {BannerComponent} from './banner/banner.component';
import {FooterComponent} from './footer/footer.component';
import {PagePrincipalComponent} from './page-principal/page-principal.component';
import {AnimePageComponent} from './anime-page/anime-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CategoryListComponent, AnimeListComponent, BannerComponent, FooterComponent, PagePrincipalComponent, AnimePageComponent, CategoryPageComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimeW';
}
