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
            <a href="/grammar-check" className="text-gray-700 hover:text-primary transition-colors">Grammar Check</a>
            <a href="/vocabulary" className="text-gray-700 hover:text-primary transition-colors">Vocabulary</a>
            <div className="relative group">
              <a href="#ielts" className="text-gray-700 hover:text-primary transition-colors">IELTS</a>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="/ielts/reading" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reading</a>
                  <a href="/ielts/writing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Writing</a>
                  <a href="/ielts/speaking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Speaking</a>
                  <a href="/ielts/listening" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Listening</a>
                </div>
              </div>
            </div>
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
            <a href="/grammar-check" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">Grammar Check</a>
            <a href="/vocabulary" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">Vocabulary</a>
            <a href="/ielts/reading" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 ml-4">IELTS Reading</a>
            <a href="/ielts/writing" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 ml-4">IELTS Writing</a>
            <a href="/ielts/speaking" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 ml-4">IELTS Speaking</a>
            <a href="/ielts/listening" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 ml-4">IELTS Listening</a>
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