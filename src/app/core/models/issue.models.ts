export interface ActivityLogEntry {
  timestamp: string;
  action: string;
  details?: string;
}

// src/app/core/models/issue.models.ts
export interface Issue {
  id: string;
  title: string;
  description: string;
  status?: 'todo' | 'in-progress' | 'done';
  assignee?: string;
  dueDate?: string;
  priority?: string;
  labels?: string[];
  activityLog?: { timestamp: string; action: string; details?: string }[];
}
