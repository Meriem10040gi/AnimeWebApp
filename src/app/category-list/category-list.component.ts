import {Component, inject, Input, OnInit} from '@angular/core';
import {AnimeService} from '../../anime.service';
import {NgForOf} from '@angular/common';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [
    NgForOf,
    CommonModule,
    RouterLink
  ],
  templateUrl: './category-list.component.html',
  standalone: true,
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent{
  @Input() hide : boolean | undefined
  @Input() description : string | undefined
  @Input() categories : any[] = []
}
