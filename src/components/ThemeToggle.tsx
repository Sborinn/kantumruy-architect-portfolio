
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme based on system preference or previous selection
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || 
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-background hover:bg-secondary transition-colors"
      aria-label={isDark ? "ប្តូរទៅ​ពន្លឺថ្ងៃ" : "ប្តូរទៅ​ពន្លឺយប់"}
    >
      {isDark ? (
        <Sun size={20} className="text-foreground" />
      ) : (
        <Moon size={20} className="text-foreground" />
      )}
    </button>
  );
}
