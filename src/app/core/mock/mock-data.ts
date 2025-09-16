import { Issue } from "../models/issue.models";

export const ISSUES: Issue[] = [
  {
    id: '1',  // ✅ use string instead of number
    title: 'Issue One',
    description: 'First issue',
    status: 'todo',
    assignee: 'John',
    dueDate: '2025-09-20',
    priority: 'High',
    labels: ['frontend'],
    activityLog: []
  },
  {
    id: '2',  // ✅ use string instead of number
    title: 'Issue Two',
    description: 'Second issue',
    status: 'in-progress',
    assignee: 'Jane',
    dueDate: '2025-09-22',
    priority: 'Medium',
    labels: ['backend'],
    activityLog: []
  }
];
