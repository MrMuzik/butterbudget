import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useEffect, useState } from "react"; // Import useEffect and useState for state management

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false); // Manage state to check admin role

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;

    script.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.init();

        // Listen for login event to check user roles
        window.netlifyIdentity.on('login', (user) => {
          const roles = user?.app_metadata?.roles || [];
          if (roles.includes('admin')) {
            setIsAdmin(true); // Update state to reflect admin access
            console.log("User has admin access");
            // Grant access to admin features, redirect, etc.
          } else {
            setIsAdmin(false);
            console.log("User is not an admin");
            // Restrict access or handle non-admin access
          }
        });

        // Optional: Handle logout
        window.netlifyIdentity.on('logout', () => {
          setIsAdmin(false);
          console.log("User logged out");
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {isAdmin ? <p>Welcome, Admin!</p> : <p>You are a regular user.</p>}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
