import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- import CommonModule
import { Issue } from '../../../core/models/issue.models';

@Component({
  selector: 'app-card',
  standalone: true,   // important if standalone
  imports: [CommonModule], // <-- add CommonModule here
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() issue!: Issue;
}
