// /app/routes/admin.tsx
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireRole } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  // Call the requireRole function to check if the user has the admin role
  requireRole("admin", "/login");
  return null; // You can return data here if needed
};

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Only admins can access this page.</p>
    </div>
  );
}
