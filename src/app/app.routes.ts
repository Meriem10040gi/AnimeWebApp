import { Route } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import {AllAnimePageComponent} from './all-anime-page/all-anime-page.component';

export const routes: Route[] = [
  { path: '', component: PagePrincipalComponent },
  { path: 'anime', component: AnimePageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'animes/:type', component: AllAnimePageComponent },
  { path: 'anime/:id', component: AnimePageComponent },
  { path: 'category/:id', component: AllAnimePageComponent },
];
