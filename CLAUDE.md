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

**Component-based architecture**: The application has been refactored from a single component into multiple focused components.

### Component Structure

- **App.jsx** - Root component that manages application state and coordinates child components
  - Manages `transactions` state (array of all transactions)
  - Provides `handleAddTransaction` callback to add new transactions
  - Renders the main layout with title, subtitle, and child components

- **Summary.jsx** - Displays financial summary cards
  - Receives `transactions` array as prop
  - Calculates `totalIncome`, `totalExpenses`, and `balance` internally
  - Renders three summary cards: Income, Expenses, Balance

- **TransactionForm.jsx** - Form for adding new transactions
  - Manages form state: `description`, `amount`, `type`, `category`
  - Contains `categories` array locally
  - Receives `onAddTransaction` callback prop
  - Creates transaction object with `parseFloat(amount)` to ensure numeric amounts
  - Resets form after successful submission

- **TransactionList.jsx** - Displays and filters transaction history
  - Receives `transactions` array as prop
  - Manages filter state: `filterType`, `filterCategory`
  - Contains `categories` array locally
  - Renders filterable table of transactions

### State Management

- **Top-level state** (App.jsx): `transactions` array - single source of truth
- **Component-local state**: Form inputs, filters, etc. managed by respective components
- Uses React's `useState` hooks throughout
- **Data storage**: In-memory only (transactions array in component state)
- **No backend**: Purely client-side application

### Data Flow

1. App.jsx holds the transactions array
2. TransactionForm calls `onAddTransaction(newTransaction)` → App.jsx updates state
3. Updated transactions flow down to Summary and TransactionList via props
4. Each component manages its own UI state (form inputs, filters)

## Key Data Structure

Transactions are objects with: `id` (number), `description` (string), `amount` (number), `type` ("income" | "expense"), `category` (string), and `date` (ISO date string).

**Important**: Amounts are stored as numbers, not strings. New transactions use `parseFloat()` to convert form input.

## Tech Stack

- React 19
- Vite 7 (dev server and build tool)
- ESLint 9 (with React hooks and React Refresh plugins)
