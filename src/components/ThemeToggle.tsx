'use client';

import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  
  // This ensures the component only renders fully after hydration
  useEffect(() => {
    setIsClient(true);
    
    // For debugging - check if dark class is on HTML at component mount
    console.log('ThemeToggle mounted, HTML classes:', document.documentElement.className);
    console.log('Current theme from context:', theme);
  }, [theme]);

  const handleToggle = () => {
    try {
      // Prevent rapid clicking
      if (isToggling) return;
      
      // Add a small visual feedback with transition
      setIsToggling(true);
      const button = document.activeElement as HTMLElement;
      if (button) button.blur();
      
      // Toggle the theme
      toggleTheme();
      
      // Check if the toggle actually applied the dark class
      setTimeout(() => {
        console.log('After toggle, HTML classes:', document.documentElement.className);
        console.log('Dark class present:', document.documentElement.classList.contains('dark'));
        setIsToggling(false);
      }, 300);
    } catch (error) {
      console.error('Error toggling theme:', error);
      setIsToggling(false);
    }
  };
  
  // Force apply/remove dark class directly based on current theme
  useEffect(() => {
    if (!isClient) return;
    
    try {
      if (theme === 'dark' && !document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark');
        console.log('Manually added dark class');
      } else if (theme === 'light' && document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        console.log('Manually removed dark class');
      }
    } catch (error) {
      console.error('Error applying theme class:', error);
    }
  }, [theme, isClient]);
  
  if (!isClient) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <button 
        aria-label="Toggle theme" 
        className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A472A]"
        disabled
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isToggling}
      className={`p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A472A] 
        ${isToggling ? 'scale-90 opacity-70' : 'active:scale-90'}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
} 