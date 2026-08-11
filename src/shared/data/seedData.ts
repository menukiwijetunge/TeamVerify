import type { User, Course, Assignment, TaskItem } from "../types";

export const USERS: User[] = [
  { id: "u1", name: "Amara Singh", initials: "AS", studentNumber: "s3891422" },
  { id: "u2", name: "Ben Okafor", initials: "BO", studentNumber: "s3872015" },
  { id: "u3", name: "Chloe Nguyen", initials: "CN", studentNumber: "s3905671" },
  { id: "u4", name: "Diego Reyes", initials: "DR", studentNumber: "s3866204" },
];

export const ASSIGNMENT_TEAMS: Record<string, string[]> = {
  a1: ["u1", "u2", "u3", "u4"],
  a2: ["u1", "u2", "u3", "u4"],
  a3: ["u1", "u3", "u4"],
};

export const COURSES: Course[] = [
  { id: "c1", code: "COSC2801", name: "Programming" },
  { id: "c2", code: "MKTG2201", name: "Digital Marketing" },
];

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "a1",
    courseId: "c1",
    title: "Assignment 1 — Sorting visualiser",
    dueDate: "2026-08-22",
    team: "Fair Winds",
    mode: "scrum",
    reviewCadence: "Once, at project end",
  },
  {
    id: "a2",
    courseId: "c1",
    title: "Assignment 2 — Group capstone build",
    dueDate: "2026-10-10",
    team: "Fair Winds",
    mode: "scrum",
    reviewCadence: "Weekly",
  },
  {
    id: "a3",
    courseId: "c2",
    title: "Campaign strategy report",
    dueDate: "2026-09-05",
    team: "Group 6",
    mode: "simple",
    reviewCadence: "Once, at project end",
  },
];

export const TASKS: TaskItem[] = [
  {
    id: "t1",
    assignmentId: "a1",
    title: "Build merge sort visualiser",
    description: "Implement merge sort step animation in the visualiser.",
    status: "open",
    ownerId: null,
    originalDueDate: "2026-08-18",
    currentDueDate: "2026-08-18",
    acceptedAt: null,
    extensions: [],
    evidence: null,
    completedAt: null,
  },
  {
    id: "t2",
    assignmentId: "a1",
    title: "Build quick sort visualiser",
    description: "Implement quick sort step animation.",
    status: "progress",
    ownerId: "u2",
    originalDueDate: "2026-08-15",
    currentDueDate: "2026-08-19",
    acceptedAt: "2026-08-05T10:00:00.000Z",
    extensions: [
      {
        date: "2026-08-19",
        reason: "Waiting on a code review before finishing.",
        requestedAt: "2026-08-13T09:00:00.000Z",
      },
    ],
    evidence: null,
    completedAt: null,
  },
];