import { Link } from "react-router-dom";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-600">
            Created by Nguyễn Huy Vũ
          </p>
          <p className="text-gray-500 text-sm">
            Computer Science student at Can Tho University
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} IELTS Ace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};