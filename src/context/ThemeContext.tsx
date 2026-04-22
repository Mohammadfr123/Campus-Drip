import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  bgGradient: string;
}

export interface ThemeFonts {
  sans: string;
  display: string;
  graffiti: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export const THEMES: Theme[] = [
  {
    name: 'Sunset Drip',
    colors: {
      primary: '#FF7043',
      secondary: '#0A0A0A',
      accent: '#FF5722',
      bgGradient: 'radial-gradient(circle at 50% 50%, rgba(255, 112, 67, 0.08) 0%, rgba(10, 10, 10, 1) 100%)',
    },
    fonts: {
      sans: '"Inter", sans-serif',
      display: '"Space Grotesk", sans-serif',
      graffiti: '"Permanent Marker", cursive',
    },
  },
  {
    name: 'Midnight Neon',
    colors: {
      primary: '#FF8C42',
      secondary: '#050510',
      accent: '#FF3D00',
      bgGradient: 'radial-gradient(circle at 50% 50%, rgba(255, 140, 66, 0.08) 0%, rgba(5, 5, 16, 1) 100%)',
    },
    fonts: {
      sans: '"Inter", sans-serif',
      display: '"Space Grotesk", sans-serif',
      graffiti: '"Permanent Marker", cursive',
    },
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (name: string) => void;
  updateThemeColors: (colors: Partial<ThemeColors>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', currentTheme.colors.primary);
    root.style.setProperty('--brand-secondary', currentTheme.colors.secondary);
    root.style.setProperty('--brand-accent', currentTheme.colors.accent);
    root.style.setProperty('--bg-gradient', currentTheme.colors.bgGradient);
    root.style.setProperty('--font-sans', currentTheme.fonts.sans);
    root.style.setProperty('--font-display', currentTheme.fonts.display);
    root.style.setProperty('--font-graffiti', currentTheme.fonts.graffiti);
  }, [currentTheme]);

  const setTheme = (name: string) => {
    const theme = THEMES.find((t) => t.name === name);
    if (theme) setCurrentTheme(theme);
  };

  const updateThemeColors = (newColors: Partial<ThemeColors>) => {
    setCurrentTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...newColors },
    }));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, updateThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
