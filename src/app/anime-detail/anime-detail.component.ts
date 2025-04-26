import {Component, Input} from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-anime-detail',
  imports: [
    JsonPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './anime-detail.component.html',
  standalone: true,
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent {
@Input() anime : any
}
