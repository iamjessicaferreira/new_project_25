"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/app/resources";
import { Button, Heading, Column, PasswordInput } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const normalize = (p: string) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p);

const checkRouteEnabled = (pathname: string) => {
  if (!pathname) return false;

  const norm = normalize(pathname);

  if (norm in routes) {
    return routes[norm as keyof typeof routes];
  }
  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  const dynamicRoutes = ["/blog", "/work"] as const;
  for (const route of dynamicRoutes) {
    if (norm.startsWith(route) && routes[route]) {
      return true;
    }
  }

  return false;
};

const checkAuthStatus = () => {
  if (typeof window === "undefined") return false;

  const authToken = localStorage.getItem("authToken");
  const authExpiry = localStorage.getItem("authExpiry");

  if (authToken && authExpiry) {
    const now = new Date().getTime();
    const expiry = parseInt(authExpiry);

    if (now < expiry) {
      return true;
    }
    localStorage.removeItem("authToken");
    localStorage.removeItem("authExpiry");
  }
  return false;
};

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname() ?? "";
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(() => checkAuthStatus());
  const [error, setError] = useState<string | undefined>(undefined);

  const isRouteEnabled = useMemo(() => checkRouteEnabled(pathname), [pathname]);
  const isPasswordRequired = useMemo(
    () => !!protectedRoutes[pathname as keyof typeof protectedRoutes],
    [pathname],
  );

  const handlePasswordSubmit = () => {
    const correctPassword = process.env.NEXT_PUBLIC_PAGE_ACCESS_PASSWORD;

    if (password === correctPassword) {
      const expiry = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("authToken", "authenticated");
      localStorage.setItem("authExpiry", expiry.toString());

      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
