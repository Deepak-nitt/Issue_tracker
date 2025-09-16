// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/components/card/card.component';
import { BoardComponent } from './features/board/board.component';
import { Issue } from './core/models/issue.models';  // ✅ Import Issue model

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, BoardComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  sampleIssue: Issue = {
    id: '1',
    title: 'Test Issue',
    description: 'A test description',
    status: 'todo',            // ✅ must be one of 'todo' | 'in-progress' | 'done'
    assignee: 'John Doe',
    dueDate: '2025-09-20',
    priority: 'High',
    labels: ['bug'],
    activityLog: []
  };
}
