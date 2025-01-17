import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">IELTS Ace</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#practice" className="text-gray-700 hover:text-primary transition-colors">Practice Tests</a>
            <a href="#ai-chat" className="text-gray-700 hover:text-primary transition-colors">AI Chat</a>
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">Features</a>
            <a href="#practice" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">Practice Tests</a>
            <a href="#ai-chat" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">AI Chat</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};