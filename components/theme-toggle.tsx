"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-11 h-11 rounded-lg border border-border flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "min-w-[44px] min-h-[44px] p-2.5 rounded-lg border border-border hover:bg-muted text-foreground transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      title={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
    >
      {isDark ? (
        <Sun className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
      )}
    </button>
  );
}
