// src/app/boards/board.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { Issue } from '../../core/models/issue.models';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  issues: Issue[] = [
    {
      id: '1',
      title: 'Fix Login Bug',
      description: 'Users cannot login with Google',
      status: 'todo',
      assignee: 'Alice',
      dueDate: '2025-09-20',
      priority: 'High',
      labels: ['bug'],
      activityLog: []
    },
    {
      id: '2',
      title: 'Add Drag & Drop',
      description: 'Enable moving cards between columns',
      status: 'in-progress',
      assignee: 'Bob',
      dueDate: '2025-09-22',
      priority: 'Medium',
      labels: ['enhancement'],
      activityLog: []
    },
    {
      id: '3',
      title: 'Write Unit Tests',
      description: 'Cover card component',
      status: 'done',
      assignee: 'Carol',
      dueDate: '2025-09-25',
      priority: 'Low',
      labels: ['test'],
      activityLog: []
    }
  ];
}



