// /app/routes/dashboard.tsx
import { LoaderFunction, redirect } from "@remix-run/node";
import { requireRole } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  requireRole("user", "/login");
  return null;
};

export default function DashboardPage() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}
