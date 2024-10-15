
# ButterBudget

ButterBudget is a financial services application designed for managing personal and household budgets. The app is built with **SvelteKit** on the frontend, **Deno** on the backend, and utilizes **Supabase** for database and authentication. This project prioritizes security, scalability, and performance, ensuring efficient handling of sensitive financial data.

## Project Structure

```
butterbudget/
│
├── api/                         # Backend - Custom API endpoints (Deno)
│   ├── supabaseClient.ts         # Supabase client setup for Deno
│   ├── auth/                     # Authentication logic
│   │   └── login.ts              # Login logic
│   ├── routes/                   # API route handlers
│   │   ├── users.ts              # Example API endpoint
│   └── main.ts                   # Main Deno server file
│
├── src/                          # Frontend - SvelteKit project
│   ├── routes/                   # SvelteKit pages and API routes
│   │   └── +page.svelte          # Example Svelte component
│   ├── lib/                      # Stores, utilities, Supabase client for frontend
│   ├── components/               # Svelte components
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   └── app.html                  # Main HTML template
│
├── .vscode/                      # VSCode configuration for Deno and TypeScript
│   └── settings.json             # Deno-specific settings for VSCode
│
├── .env                          # Environment variables (git ignored)
├── package.json                  # Frontend dependencies for SvelteKit
├── tsconfig.json                 # TypeScript configuration for frontend
├── deno.json                     # Deno project configuration (backend)
└── README.md                     # Project documentation
```

## Stack

### **Frontend:**

*   **Framework**: SvelteKit (Vite built-in) with TypeScript.
*   **UI**: Skeleton UI for component styling and accessibility.
*   **Testing**:
    *   **Unit/Integration Testing**: Vitest.
    *   **End-to-End Testing**: Playwright or Cypress.

* * *

### **Backend:**

*   **Runtime**: Deno for custom server logic and API handling.
*   **Backend Services**: Supabase (PostgreSQL) for database, authentication, and real-time features.
*   **Custom API Endpoints**: Handled via Deno, with full control over backend logic and security.

* * *

### **Database:**

*   **Database**: Supabase (PostgreSQL).
*   **Real-Time Features**: Supabase Real-Time API for live data updates.
*   **Backup**: Supabase automated backups for database recovery.

* * *

### **Authentication:**

*   **Authentication**: Supabase (integrated into Deno backend for secure server-side session management).
*   **Session Management**: Session tokens with Deno, ensuring secure handling of user sessions.
*   **Rate Limiting**: Custom rate-limiting logic with `deno-limiter`.

* * *

### **Hosting:**

*   **Hosting**: Deno Deploy (for global edge hosting and auto-scaling).

* * *

### **Testing:**

*   **Frontend**: Vitest for unit and integration testing; Playwright or Cypress for end-to-end testing.
*   **Backend**: Deno’s built-in test runner for unit/integration tests, Supertest for API testing, and K6 or Artillery for load/performance testing.

* * *

### **Logging & Monitoring**:

*   **Logging**: Supabase Logs and Deno Deploy logging.
*   **Error Handling**: Basic error handling with Deno and SvelteKit, growing into Sentry for real-time error tracking.

* * *

### **Caching (Optional)**:

*   **Initial Caching**: Supabase's built-in caching.
*   **Future Caching**: Plan to integrate Redis for advanced caching.

* * *

### **CI/CD**:

*   **CI/CD**: GitHub Actions for continuous integration, running tests and checks before deployment, with automatic pushes to staging and production on Deno Deploy.

* * *

### **Environment Management**:

*   **Environment Variables**: Secure management using Deno Deploy’s environment configuration.

* * *

### **Backup**:

*   **Backup Solution**: Supabase's built-in backup system for database recovery.

* * *

### **Security & Scalability**:

*   Secure handling of authentication, API requests, and database interactions with **Deno**, ensuring security for sensitive financial data.
*   Scalable deployment with **Deno Deploy**, optimized for global performance.

* * *

This setup is highly secure, scalable, and future-proof, with everything in place for a successful financial services application. You're all set for a smooth development process!

## Getting Started

This project uses **SvelteKit** for the frontend and **Deno** with **Supabase** for the backend. Make sure you have **Deno** and **Node.js** installed on your machine before proceeding.

### Prerequisites

- **Deno**: Install Deno by following the instructions at [deno.land](https://deno.land).
- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org).
- **Supabase**: Sign up at [supabase.io](https://supabase.io) to get your project URL and API keys.

### 1. Install Frontend Dependencies

Navigate to the `src/` directory and install the required Node.js dependencies for the SvelteKit frontend:

```bash
cd src/
npm install
```

### 2. Install Backend Dependencies

The backend uses **Deno**, so no additional package installation is needed. However, you need to cache the remote dependencies:

```bash
cd ../api/
deno cache supabaseClient.ts
deno cache main.ts
```

### 3. Set Up Environment Variables

Create a `.env` file in both the `src/` and `api/` directories to securely store environment variables.

**In `src/.env`** (for frontend):

```
VITE_SUPABASE_URL=https://your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**In `api/.env`** (for backend):

```
SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_KEY=your-supabase-service-key
```

### 4. Run the Development Servers

#### Frontend (SvelteKit):
To start the frontend development server, navigate to the `src/` directory and run:

```bash
cd src/
npm run dev
```

#### Backend (Deno):
To start the Deno backend server, navigate to the `api/` directory and run:

```bash
cd ../api/
deno run --allow-net --allow-env main.ts
```

### 5. Folder Structure Overview

- **`src/` (Frontend)**: Contains the **SvelteKit** project, responsible for the user interface and interaction with Supabase for real-time data updates.
- **`api/` (Backend)**: Contains the **Deno** server, responsible for handling custom API endpoints, authentication, and interaction with Supabase for secure data management.

### 6. Technologies Used

- **Frontend**: 
  - [SvelteKit](https://kit.svelte.dev/) for building interactive, performant user interfaces.
  - [Skeleton UI](https://www.skeleton.dev/) for design components.
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.

- **Backend**: 
  - [Deno](https://deno.land/) for secure and modern JavaScript/TypeScript runtime.
  - [Supabase](https://supabase.io/) for database (PostgreSQL), authentication, and real-time APIs.

### 7. Deployment

The project is set up to be deployed using **Deno Deploy** for the backend and any static hosting provider (like **Vercel** or **Netlify**) for the frontend. 

**Deno Deploy Setup**:
- Set up environment variables directly in the **Deno Deploy** dashboard for secure backend operations.
  
```bash
deno deploy --project=your-project-name --token=your-deploy-token main.ts
```

### 8. Testing

#### Frontend Testing:
- **Vitest** is used for unit and integration testing in SvelteKit.
  
To run frontend tests:

```bash
cd src/
npm run test
```

#### Backend Testing:
- **Deno’s built-in test runner** is used for backend testing.
  
To run backend tests:

```bash
cd ../api/
deno test
```

### 9. Future Improvements

- **Add Rate Limiting**: Implement `deno-limiter` for rate-limiting logic to protect your API endpoints.
- **Implement Caching**: Introduce Supabase's built-in caching, with plans to grow into Redis.
- **Error Monitoring**: Set up **Sentry** for error monitoring and real-time tracking in production.
  
### 10. License

This project is licensed under the MIT License.

---

Feel free to contribute by opening a pull request or issue.
