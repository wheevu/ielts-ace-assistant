import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">IELTS Practice</Link>
          
          <div className="flex items-center gap-4">
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
            <Link to="/ielts/reading">
              <Button variant="ghost">Reading</Button>
            </Link>
            <Link to="/ielts/writing">
              <Button variant="ghost">Writing</Button>
            </Link>
            <Link to="/ielts/speaking">
              <Button variant="ghost">Speaking</Button>
            </Link>
            <Link to="/ielts/listening">
              <Button variant="ghost">Listening</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
