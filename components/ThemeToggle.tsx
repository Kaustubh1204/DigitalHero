"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isHero = false }: { isHero?: boolean }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  // Icon styling adjusts based on whether it is inside the hero section and currently rendering the silver style
  const iconClass = isHero ? "text-[rgba(255,255,255,0.95)]" : (theme === "light" ? "text-black" : "text-white");

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--text)]"
        aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        aria-pressed={theme === "dark"}
      >
        {theme === "light" ? (
          <Moon size={20} className={iconClass} />
        ) : (
          <Sun size={20} className={iconClass} />
        )}
      </button>
    </div>
  );
}
