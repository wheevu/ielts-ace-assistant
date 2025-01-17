import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpellCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const GrammarCheck = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [corrections, setCorrections] = useState<Array<{ type: string; suggestion: string; context: string }>>([]);
  const { toast } = useToast();

  const handleCheck = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty Text",
        description: "Please enter some text to check.",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    // TODO: Implement actual grammar checking logic
    // This is a mock implementation
    setTimeout(() => {
      setCorrections([
        {
          type: "grammar",
          suggestion: "Consider using 'have' instead of 'has'",
          context: "They has gone to the store",
        },
      ]);
      setIsChecking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex-grow animate-fade-in">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SpellCheck className="h-6 w-6" />
              Grammar Check
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text here..."
              className="min-h-[200px] text-base"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              onClick={handleCheck}
              disabled={isChecking}
              className="w-full md:w-auto"
            >
              {isChecking ? "Checking..." : "Check Grammar"}
            </Button>
            {corrections.length > 0 && (
              <div className="mt-6 space-y-4 animate-fade-in">
                <h3 className="text-lg font-semibold">Suggestions</h3>
                {corrections.map((correction, index) => (
                  <Card key={index} className="p-4">
                    <p className="font-medium text-red-500">{correction.type}</p>
                    <p className="text-sm text-gray-600 mt-1">{correction.context}</p>
                    <p className="text-sm text-green-600 mt-2">
                      Suggestion: {correction.suggestion}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default GrammarCheck;