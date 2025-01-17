import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X } from "lucide-react";

interface Message {
  content: string;
  isUser: boolean;
}

interface ChatWindowProps {
  onClose: () => void;
}

export const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm Alfred, your IELTS preparation assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { content: input, isUser: true }]);
    setInput("");

    // Simulate Alfred's response (replace with actual AI integration later)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "I'm currently in development, but I'll be able to help you with your IELTS preparation soon!",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 right-4 w-80 h-[500px] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col animate-fade-in">
      <div className="p-4 border-b flex justify-between items-center bg-primary text-primary-foreground rounded-t-lg">
        <h3 className="font-semibold">Chat with Alfred</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-primary-foreground/10">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};