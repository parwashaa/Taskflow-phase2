# TaskFlow — Phase 2

A React + TypeScript task manager built for CS4717 Web Technologies I.

## Tech Stack
- React 18
- TypeScript
- React Router v6
- Vite
- CSS (no UI library)

## Getting Started

```bash
# Install dependencies
pnpm install

# Install React Router (if not already installed)
pnpm add react-router-dom

# Start development server
pnpm run dev
```

## Project Structure

```
src/
  components/
    Header.tsx       # App header with logo and logout button
    Navbar.tsx       # Navigation links (Tasks | New Task)
    TaskCard.tsx     # Individual task card with edit/delete
    TaskForm.tsx     # Create and edit task form
  pages/
    TaskListPage.tsx # Route: / — shows all tasks
    CreateTaskPage.tsx # Route: /create — form page
  types/
    task.ts          # TypeScript types and interfaces
  data/
    mockTasks.ts     # 6 initial hard-coded tasks
  App.tsx            # Router setup and global state
  main.tsx           # React entry point
  index.css          # All styles
```

## Features

- View all tasks on the Task List page
- Create new tasks with title, description, status, priority, and optional due date
- Delete tasks
- Edit tasks (bonus feature — Edit button updates existing task via same form)
- Form validation: title is required
- React Router navigation between pages
- Fully typed with TypeScript
- Responsive on mobile and desktop

## Routes

| Route     | Page             |
|-----------|------------------|
| `/`       | Task List Page   |
| `/create` | Create Task Page |
