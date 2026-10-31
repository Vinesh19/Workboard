# WorkBoard – Project Documentation

## 1. Project Overview

**Project Name:** WorkBoard  
**Project Type:** Project Management Application  
**Inspiration:** Jira by Atlassian  
**Technology Stack:** Next.js, TypeScript, Tailwind CSS

WorkBoard is a project management application that helps teams organize projects, create tasks, assign responsibilities, track progress and manage their daily work.

The application is inspired by project management tools such as Jira, but we will build our own simplified version with the features required for our learning objectives.

This is not intended to be a complete Jira clone. Our goal is to understand how real-world applications are planned, designed, structured and developed.

---

## 2. Problem Statement

When teams work on multiple projects, it becomes difficult to manage tasks, track progress and understand who is responsible for particular work.

For example:

- A project manager may not know which tasks are pending.
- A developer may not know which tasks are assigned to them.
- A team lead may not know how much work has been completed.
- Team members may lose track of task priorities and deadlines.

WorkBoard aims to solve these problems by providing a centralized platform for project and task management.

---

## 3. Target Users and Their Responsibilities

We have identified three primary user roles.

### 3.1 Project Manager

Responsibilities:

- Create and manage projects.
- Create tasks within projects.
- Assign tasks to team members.
- Set task priorities and deadlines.
- Monitor overall project progress.

### 3.2 Developer / Team Member

Responsibilities:

- View assigned tasks.
- Understand task requirements.
- Update task status.
- Track pending and completed work.

### 3.3 Team Lead

Responsibilities:

- Monitor team progress.
- Review task statuses.
- Identify delayed or pending work.
- Understand overall project progress.

*Note: These are conceptual user roles for our initial product design. Full login and role-based authorization will be introduced in a later development phase.*

---

## 4. Project Goals

The primary goals of WorkBoard are:

1. Organize multiple projects in one place.
2. Allow users to create and manage tasks.
3. Assign tasks to team members.
4. Track task progress through different statuses.
5. Display tasks using a Kanban board.
6. Provide a dashboard for a quick overview.
7. Make project and task information easy to access.

---

## 5. Feature Requirements

We have divided the features into three categories.

### 5.1 Essential Features – MVP

These features are required for the first working version.

| Feature | Description |
|---|---|
| Dashboard | Display project and task summaries |
| Project Listing | Display all available projects |
| Create Project | Create a new project |
| Project Details | Display information about a project |
| Task Listing | Display tasks belonging to a project |
| Create Task | Create a task inside a project |
| Edit Task | Update task information |
| Delete Task | Remove a task |
| Task Assignment | Assign a task to a team member |
| Task Priority | Set Low, Medium or High priority |
| Task Status | Manage To Do, In Progress and Done |
| Kanban Board | Display tasks according to their status |
| Search | Search for projects or tasks |
| Filters | Filter tasks by status, priority or assignee |

### 5.2 Improvement Features

These will be considered after the MVP.

- Drag-and-drop task management.
- Comments on tasks.
- Task activity history.
- Pagination.
- URL-based filter persistence.
- Better dashboard analytics.
- Optimistic UI updates.

### 5.3 Advanced Features

These are outside the initial scope.

- User authentication.
- Role-based authorization.
- Notifications.
- Advanced reporting.
- Team management.
- Automated workflows.
- Comprehensive testing and performance optimization.

---

## 6. Main Application Workflow

The following example explains how users will interact with WorkBoard.

**Example Project:** Website Redesign

1. A project manager creates a project named Website Redesign.
2. The project manager creates a task named Build Login Page.
3. The manager sets its priority to High.
4. The manager assigns the task to a developer.
5. The task initially appears in the To Do column.
6. The developer starts working and changes its status to In Progress.
7. After completing the task, the developer changes its status to Done.
8. The updated task status is reflected in the project board and relevant summaries.

This workflow will guide our implementation.

---

## 7. Application Screens and Routes

We will use the Next.js App Router.

| Screen | Route | Purpose |
|---|---|---|
| Dashboard | `/dashboard` | Show overall project and task summaries |
| Projects | `/projects` | List all projects |
| Create Project | `/projects/new` | Create a project |
| Project Details | `/projects/[projectId]` | Show project information and tasks |
| Project Board | `/projects/[projectId]/board` | Show tasks in Kanban format |
| Task Details | `/projects/[projectId]/tasks/[taskId]` | Show and manage an individual task |
| My Tasks | `/my-tasks` | Show tasks assigned to the current user |

### Understanding Dynamic Routes

Routes such as:

- `/projects/101`
- `/projects/102`
- `/projects/103`

will use the same project details page but display different project data.

In Next.js, `[projectId]` represents a dynamic route segment.

Similarly, `[taskId]` represents the identifier of a task.

---

## 8. Data Model

Before implementing features, we need to understand what information our application must store.

### 8.1 Project

A project represents a collection of related tasks.

| Field | Type | Description |
|---|---|---|
| id | string | Unique project identifier |
| name | string | Project name |
| description | string | Project description |
| status | string | Project status |
| createdAt | string | Creation date |

### 8.2 Task

A task represents an individual unit of work within a project.

| Field | Type | Description |
|---|---|---|
| id | string | Unique task identifier |
| projectId | string | Project to which the task belongs |
| title | string | Task title |
| description | string | Task description |
| status | TaskStatus | Current task status |
| priority | TaskPriority | Task priority |
| assigneeId | string or null | Assigned user's identifier |
| dueDate | string or null | Task deadline |

### 8.3 User

A user represents a person working on the application.

| Field | Type | Description |
|---|---|---|
| id | string | Unique user identifier |
| name | string | User's name |
| email | string | User's email |
| avatarUrl | string | Profile image URL |

### 8.4 Task Status

We will initially support three task statuses:

- `todo`
- `in-progress`
- `done`

### 8.5 Task Priority

We will initially support three priority levels:

- `low`
- `medium`
- `high`

### 8.6 Relationships Between Entities

- One project can contain multiple tasks.
- Each task belongs to one project.
- One user can be assigned multiple tasks.
- A task can have one assigned user or no assigned user.

These relationships will help us structure our data and future API integration.

---

## 9. Component Planning

We will divide the application into reusable components based on their responsibilities.

### 9.1 Layout Components

- `AppSidebar`
- `AppHeader`
- `PageHeader`

### 9.2 Project Components

- `ProjectCard`
- `ProjectList`
- `ProjectForm`
- `ProjectDetails`

### 9.3 Task Components

- `TaskCard`
- `TaskForm`
- `TaskList`
- `TaskDetails`
- `StatusBadge`
- `PriorityBadge`

### 9.4 Board Components

- `BoardHeader`
- `BoardFilters`
- `BoardColumn`
- `TaskCard`

### 9.5 Shared Components

- `Button`
- `Input`
- `Select`
- `Modal`
- `EmptyState`
- `LoadingState`
- `ErrorState`
- `ConfirmDialog`

We will extract components when they have a clear responsibility, are reusable or have independent behavior. We do not need to create a separate component for every HTML element.

---

## 10. Initial Folder Structure

We will gradually build the following structure:

```text
workboard/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [projectId]/
│   │   │       ├── page.tsx
│   │   │       ├── board/
│   │   │       │   └── page.tsx
│   │   │       └── tasks/
│   │   │           └── [taskId]/
│   │   │               └── page.tsx
│   │   │
│   │   └── my-tasks/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── tasks/
│   │   ├── board/
│   │   └── shared/
│   │
│   ├── lib/
│   │   ├── data/
│   │   └── utils/
│   │
│   └── types/
│       ├── project.ts
│       ├── task.ts
│       └── user.ts
│
├── README.md
├── package.json
└── tsconfig.json
```

This is our planned structure. We may introduce additional folders when a real requirement arises.

---

## 11. Development Approach

We will not develop the complete application in one step.

We will follow a milestone-based development process.

| Phase | Development Milestone |
|---|---|
| 1 | Product analysis and requirements |
| 2 | Finalize application architecture |
| 3 | Next.js project setup |
| 4 | Shared layout and navigation |
| 5 | Dashboard UI |
| 6 | Projects listing and project creation |
| 7 | Project details |
| 8 | Task creation, editing and deletion |
| 9 | Task assignment and priority |
| 10 | Kanban board |
| 11 | Search and filters |
| 12 | API and real data integration |
| 13 | Advanced features |
| 14 | Testing and deployment |

Each milestone will include requirement analysis, implementation, testing and review.

---

## 12. Data Management Strategy

Initially, we will use mock data to understand the frontend application architecture.

Mock data means sample data written in our project instead of fetching it from a real backend.

For example, we can initially create sample projects and tasks in a data file.

As the application grows, we will introduce a proper data source and API integration.

The goal is to keep UI components organized so that changing the data source later does not require rewriting the entire application.

---

## 13. Important Technical Concepts We Will Practice


### React

- Components and props.
- State management.
- Event handling.
- Controlled forms.
- Conditional rendering.
- Lists and keys.
- Context and custom hooks where appropriate.
- Reusable components.

### Next.js

- App Router.
- Pages and layouts.
- Dynamic routes.
- Navigation.
- Server and Client Components.
- Loading and error handling.
- Data fetching.

### TypeScript

- Interfaces and types.
- Union types.
- Optional properties.
- Nullable values.
- Type-safe component props.
- Type-safe data handling.

### Real-World Development Practices

- Requirement analysis.
- Component architecture.
- Folder organization.
- Git and GitHub collaboration.
- Debugging.
- Responsive design.
- API integration.
- Testing and deployment.

---

## 14. Application Quality Requirements

The application should not only work in the ideal situation.

We must also handle different UI states.

For example:

| Situation | Expected UI |
|---|---|
| No projects exist | Show an empty state with a Create Project action |
| No tasks exist | Show a helpful message |
| Data is loading | Show a loading indicator |
| API request fails | Show an error message and recovery action |
| Task has no assignee | Display Unassigned |
| Task has no due date | Display No due date |
| User deletes a task | Ask for confirmation |

The application should also be responsive and usable on different screen sizes.

---

## 15. Project Development Rules

1. Understand the requirement before writing code.
2. Do not copy components without understanding their purpose.
3. Keep components small and responsibility-focused.
4. Use TypeScript types instead of relying on `any`.
5. Avoid unnecessary dependencies.
6. Reuse components where it makes sense.
7. Handle loading, empty and error states.
8. Test each feature before moving to the next milestone.
9. Use meaningful Git commits.
10. Keep this README updated when important project decisions change.
