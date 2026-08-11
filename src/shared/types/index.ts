export interface User {
  id: string;
  name: string;
  initials: string;
}

export interface Extension {
  date: string;
  reason: string;
  requestedAt: string;
}

export interface Evidence {
  name: string;
  url?: string;
}

export interface TaskItem {
  id: string;
  assignmentId: string;
  title: string;
  description: string;
  status: "open" | "progress" | "completed";
  ownerId: string | null;
  originalDueDate: string;
  currentDueDate: string;
  acceptedAt: string | null;
  extensions: Extension[];
  evidence: Evidence | null;
  completedAt: string | null;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  team: string;
  mode: "scrum" | "simple";
  reviewCadence: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
}

export interface Review {
  raterId: string;
  targetId: string;
  score: number;
  comment: string;
  submittedAt: string;
}