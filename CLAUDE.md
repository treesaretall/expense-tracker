# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A learning project expense tracker built with React and Vite. This is starter code for a course and intentionally contains bugs, poor UI, and messy code that get fixed throughout the course.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Production build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Architecture

**Single-component architecture**: All application logic lives in `src/App.jsx`. There are no separate components, services, or state management libraries.

- **State management**: Uses React's `useState` hooks directly in App component
- **Data storage**: In-memory only (transactions array in component state)
- **No backend**: Purely client-side application

## Key Data Structure

Transactions are objects with: `id`, `description`, `amount` (stored as string), `type` (income/expense), `category`, and `date`.

## Known Issues

This is intentional starter code with bugs to fix during the course. The most notable bug: transaction amounts are stored as strings but used in arithmetic calculations without parsing, causing string concatenation instead of addition.

## Tech Stack

- React 19
- Vite 7 (dev server and build tool)
- ESLint 9 (with React hooks and React Refresh plugins)
