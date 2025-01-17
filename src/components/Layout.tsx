import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ChatButton } from "./chat/ChatButton";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};