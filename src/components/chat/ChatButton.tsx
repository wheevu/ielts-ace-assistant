import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatWindow } from "./ChatWindow";
import { useState } from "react";

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 shadow-lg hover:scale-105 transition-transform"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};