import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './anime-list.component.html',
  standalone: true,
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {
  @Input() animes : any[] = []
  @Input() hide : boolean | undefined
  @Input() description : string | undefined
  @Input() link : string | undefined
}
