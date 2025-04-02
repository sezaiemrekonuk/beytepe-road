'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeDebug() {
  const { theme, toggleTheme } = useTheme();
  const [manualDarkClass, setManualDarkClass] = useState(false);
  
  // Check dark class on HTML element
  useEffect(() => {
    // Get references to html and body elements
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Log the current classes on HTML and BODY
    console.log('HTML element classes:', htmlElement.className);
    console.log('BODY element classes:', bodyElement.className);
    console.log('Dark class on HTML:', htmlElement.classList.contains('dark'));
    
    // Update state based on actual dark class presence
    setManualDarkClass(htmlElement.classList.contains('dark'));
    
    // Force apply dark class directly if needed
    if (theme === 'dark' && !htmlElement.classList.contains('dark')) {
      console.log('Forcing dark class addition');
      htmlElement.classList.add('dark');
      setManualDarkClass(true);
    }
  }, [theme]);
  
  // Force toggle dark class directly on HTML
  const forceToggleDarkClass = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      setManualDarkClass(false);
    } else {
      htmlElement.classList.add('dark');
      setManualDarkClass(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg shadow-lg z-50 text-sm">
      <h3 className="font-bold mb-2 text-red-500 dark:text-green-500">Dark Mode Debug</h3>
      
      <div className="space-y-2">
        <div>Theme Context: <strong>{theme}</strong></div>
        <div>Dark Class on HTML: <strong>{manualDarkClass ? 'Yes' : 'No'}</strong></div>
        
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="p-2 bg-white dark:bg-black rounded border border-gray-300 dark:border-gray-700">
            white → black
          </div>
          <div className="p-2 bg-black dark:bg-white text-white dark:text-black rounded">
            black → white
          </div>
        </div>
        
        <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded flex flex-col gap-1">
          <div className="text-red-500 dark:text-green-500">
            red → green (extreme contrast)
          </div>
          <div className="text-[#1A472A] dark:text-[#4A8D68]">
            Brand green colors
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-300 dark:border-gray-700 flex flex-col gap-2">
          <button 
            onClick={toggleTheme}
            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 rounded hover:bg-indigo-200 dark:hover:bg-indigo-800"
          >
            Toggle Context Theme
          </button>
          
          <button 
            onClick={forceToggleDarkClass}
            className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-100 rounded hover:bg-pink-200 dark:hover:bg-pink-800"
          >
            Force Toggle HTML Class
          </button>
        </div>
      </div>
    </div>
  );
} 