your-app/
│
├── api/                         # Custom API endpoints (Deno)
│   ├── supabaseClient.ts         # Supabase client setup for Deno
│   ├── auth/                     # Authentication logic
│   │   └── login.ts              # Login logic
│   ├── routes/                   # API route handlers
│   │   ├── users.ts              # Example API endpoint
│   └── main.ts                   # Main Deno server file
│
├── src/                          # SvelteKit project (frontend)
│   ├── routes/                   # SvelteKit pages and API routes
│   │   └── +page.svelte          # Example Svelte component
│   ├── lib/                      # Stores, utilities, etc.
│   ├── components/               # Svelte components
│   ├── app.html                  # Main HTML template
│   └── hooks.server.ts           # SvelteKit hooks for SSR and auth
│
├── scripts/                      # CI/CD scripts, automation, etc.
│
├── .env                          # Environment variables (git ignored)
├── package.json                  # Dependencies for frontend (SvelteKit)
├── tsconfig.json                 # TypeScript configuration
└── deno.json                     # Deno project config
