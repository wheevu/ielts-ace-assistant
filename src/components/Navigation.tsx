import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const Navigation = () => {
  const [language, setLanguage] = useState<"en" | "vi">("en");

  return (
    <nav className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">IELTS Practice</Link>
          
          <div className="flex items-center gap-2">
            <Link to="/vocabulary">
              <Button variant="ghost">
                <BookOpen className="mr-2 h-4 w-4" />
                Vocabulary
              </Button>
            </Link>
            
            <Link to="/grammar-check">
              <Button variant="ghost">Grammar Check</Button>
            </Link>

            <Link to="/practice-tests">
              <Button variant="ghost">Practice Tests</Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  Skills
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/ielts/reading">Reading</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ielts/writing">Writing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ielts/speaking">Speaking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ielts/listening">Listening</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("vi")}>
                  Tiếng Việt {language === "vi" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};