'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Cookie name for theme storage
const THEME_COOKIE = 'beytepe-theme';

// Helper functions to manage cookies
const getThemeFromCookie = (): Theme | null => {
  const theme = Cookies.get(THEME_COOKIE) as Theme | undefined;
  return theme || null;
};

const saveThemeToCookie = (theme: Theme) => {
  // Set cookie with 365 days expiry, accessible across the site
  Cookies.set(THEME_COOKIE, theme, { expires: 365, path: '/' });
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use null as initial state to indicate "not initialized yet"
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  // Force apply the theme class to HTML element
  const applyTheme = (newTheme: Theme) => {
    const htmlElement = document.documentElement;
    
    if (newTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // For debugging - log current classes
    console.log('Current HTML classes:', htmlElement.className);
  };

  // This effect runs once on component mount
  useEffect(() => {
    // Check for user's system preference or saved preference
    const savedTheme = getThemeFromCookie();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme: Theme;
    
    // Set the initial theme based on saved preference or system preference
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (prefersDark) {
      initialTheme = 'dark';
    } else {
      initialTheme = 'light';
    }
    
    // Update state
    setTheme(initialTheme);
    
    // Apply theme to document
    applyTheme(initialTheme);
    
    // If no saved theme, save the initial one
    if (!savedTheme) {
      saveThemeToCookie(initialTheme);
    }
    
    // Mark the component as mounted
    setMounted(true);
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!getThemeFromCookie()) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
        saveThemeToCookie(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    if (!theme) return; // Don't toggle if theme is not initialized yet
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update state
    setTheme(newTheme);
    
    // Apply theme to document
    applyTheme(newTheme);
    
    // Save to cookie
    saveThemeToCookie(newTheme);
    
    console.log('Theme toggled to:', newTheme);
  };

  // Provide the actual theme value only after mounting to prevent hydration mismatch
  const contextValue = {
    theme: theme || 'light', // Fallback to light if not initialized yet
    toggleTheme
  };

  // Render children only after the component has mounted
  // This prevents hydration mismatches
  return (
    <ThemeContext.Provider value={contextValue}>
      {mounted ? children : null}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 