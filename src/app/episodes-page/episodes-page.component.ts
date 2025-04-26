import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-episodes-page',
  imports: [
    NgForOf
  ],
  templateUrl: './episodes-page.component.html',
  standalone: true,
  styleUrl: './episodes-page.component.css'
})
export class EpisodesPageComponent {
@Input() anime : any
@Input() episodes : any[]=[]
}
