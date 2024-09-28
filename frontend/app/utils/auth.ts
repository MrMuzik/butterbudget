// /app/utils/auth.ts
import { redirect } from "@remix-run/node";
import netlifyIdentity from "netlify-identity-widget";

export function requireRole(role: string, redirectTo: string) {
  const user = netlifyIdentity.currentUser();
  if (!user || !user.app_metadata.roles.includes(role)) {
    throw redirect(redirectTo);
  }
}
