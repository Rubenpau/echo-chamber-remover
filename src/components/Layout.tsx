
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple">FakeNews Detector</span>
          </Link>
          
          <div className="flex items-center gap-1 md:gap-4">
            <nav className="hidden sm:flex items-center gap-1 md:gap-4">
              <Link to="/" className={`px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'bg-purple text-white font-medium' : 'hover:bg-muted'}`}>
                Home
              </Link>
              <Link to="/how-it-works" className={`px-3 py-2 rounded-md transition-colors ${isActive('/how-it-works') ? 'bg-purple text-white font-medium' : 'hover:bg-muted'}`}>
                How It Works
              </Link>
              <Link to="/about" className={`px-3 py-2 rounded-md transition-colors ${isActive('/about') ? 'bg-purple text-white font-medium' : 'hover:bg-muted'}`}>
                About
              </Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md transition-colors ${isActive('/contact') ? 'bg-purple text-white font-medium' : 'hover:bg-muted'}`}>
                Contact
              </Link>
            </nav>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="sm:hidden border-t border-border">
          <nav className="container mx-auto px-4 py-2 flex justify-between">
            <Link to="/" className={`px-3 py-2 text-sm ${isActive('/') ? 'text-purple font-medium' : ''}`}>
              Home
            </Link>
            <Link to="/how-it-works" className={`px-3 py-2 text-sm ${isActive('/how-it-works') ? 'text-purple font-medium' : ''}`}>
              How It Works
            </Link>
            <Link to="/about" className={`px-3 py-2 text-sm ${isActive('/about') ? 'text-purple font-medium' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`px-3 py-2 text-sm ${isActive('/contact') ? 'text-purple font-medium' : ''}`}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        {children}
      </main>
      
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fake News Detector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
