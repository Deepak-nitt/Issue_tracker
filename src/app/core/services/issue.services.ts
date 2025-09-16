// src/app/core/services/issue.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { Issue } from '../models/issue.models';
import { ISSUES } from '../mock/mock-data';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues$ = new BehaviorSubject<Issue[]>([...ISSUES]);

  constructor() {}

  // Simulate API delay & 10% random failure
  private simulateApi<T>(data: T): Observable<T> {
    return of(null).pipe(
      delay(500 + Math.random() * 500), // 500–1000ms delay
      mergeMap(() =>
        Math.random() < 0.1
          ? throwError(() => new Error('Random API Error'))
          : of(data)
      )
    );
  }

  getIssues(): Observable<Issue[]> {
    return this.simulateApi(this.issues$.value);
  }

  addIssue(issue: Partial<Issue>): Observable<Issue> {
    const newIssue: Issue = {
      id: uuidv4(),
      title: issue.title || '',
      description: issue.description || '',
      status: issue.status as 'todo' | 'in-progress' | 'done' || 'todo', // ✅ ensure proper typing
      assignee: issue.assignee || '',
      dueDate: issue.dueDate || '',
      priority: issue.priority || '',
      labels: issue.labels || [],
      activityLog: [{ timestamp: new Date().toISOString(), action: 'Created' }]
    };
    const updated = [...this.issues$.value, newIssue];
    this.issues$.next(updated);
    return this.simulateApi(newIssue);
  }

  updateIssue(issueId: string, updates: Partial<Issue>): Observable<Issue> {
    const issues = this.issues$.value.map(issue => {
      if (issue.id === issueId) {
        const updatedIssue: Issue = {
          ...issue,
          ...updates,
          activityLog: [
            ...(issue.activityLog || []),
            {
              timestamp: new Date().toISOString(),
              action: 'Updated',
              details: JSON.stringify(updates)
            }
          ]
        };
        return updatedIssue;
      }
      return issue;
    });
    this.issues$.next(issues);
    const found = issues.find(i => i.id === issueId);
    if (!found) {
      return throwError(() => new Error('Issue not found'));
    }
    return this.simulateApi(found);
  }

  deleteIssue(issueId: string): Observable<void> {
    const updated = this.issues$.value.filter(i => i.id !== issueId);
    this.issues$.next(updated);
    return this.simulateApi(undefined);
  }
}


