# TodoApp

A simple web application for managing personal todo lists. Users can register, log in, reset their password, and perform full CRUD operations on their todo items, including marking items as complete.

## Features
- Register a user account
- Login/logout
- Forgot password (reset password)
- View todo list
- Add, update, and delete todo items
- Mark todo items as complete

## Tech Stack
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: .NET 8, C# (ASP.NET Core Web API)

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- .NET 8 SDK

### Backend
1. Navigate to the backend directory:
   ```sh
   cd backend/Api
   ```
2. Restore dependencies and run the API:
   ```sh
   dotnet restore
   dotnet run
   ```
   The API will be available at http://localhost:5244 (see launchSettings.json for details).

### Frontend
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at http://localhost:5173

## Testing
- Frontend: Run `npm test` in the frontend directory.
- Backend: (See `backend/Api/Tests/` for unit tests; run with `dotnet test`.)

## Architecture & Design Notes
- Backend uses in-memory lists for demo purposes (no persistent storage).
- SOLID and DRY principles are followed where possible.
- Validation and logging are implemented in the backend.
- The project is structured for clarity and maintainability.

## Demo Limitations
- Authentication is mocked (no real sessions/tokens).
- Passwords are not hashed (for demo only).
- In-memory data is lost on server restart.

## Contact
When finished, zip the codebase and send to fiyin@elios.tech as per the exercise instructions.