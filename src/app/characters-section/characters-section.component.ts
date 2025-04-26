import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-characters-section',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './characters-section.component.html',
  standalone: true,
  styleUrl: './characters-section.component.css'
})
export class CharactersSectionComponent {
@Input() characters : any[] = []
}
