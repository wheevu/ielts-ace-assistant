import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

// Mock data - in a real app this would come from an API
const vocabularyData = {
  academic: [
    { word: "analyze", translation: "phân tích", hint: "To examine in detail" },
    { word: "evaluate", translation: "đánh giá", hint: "To assess or determine value" },
    { word: "hypothesis", translation: "giả thuyết", hint: "A proposed explanation" },
  ],
  business: [
    { word: "negotiate", translation: "đàm phán", hint: "To discuss to reach agreement" },
    { word: "revenue", translation: "doanh thu", hint: "Income from business" },
    { word: "strategy", translation: "chiến lược", hint: "A plan of action" },
  ],
  // ... add more topics as needed
};

const VocabularyTopic = () => {
  const { topic } = useParams();
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [answer, setAnswer] = useState("");

  const words = vocabularyData[topic as keyof typeof vocabularyData] || [];
  const currentWord = words[currentIndex];

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowHint(false);
      setAnswer("");
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowHint(false);
      setAnswer("");
    }
  };

  const handleCheck = () => {
    if (answer.toLowerCase().trim() === currentWord.translation) {
      toast({
        title: "Correct! 🎉",
        description: "Great job! Move on to the next word.",
      });
      if (currentIndex < words.length - 1) {
        setTimeout(handleNext, 1000);
      }
    } else {
      toast({
        title: "Try again",
        description: "That's not quite right. Keep trying!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-center capitalize">
          {topic?.replace("-", " ")} Vocabulary
        </h1>

        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {currentWord?.word}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Enter the Vietnamese translation"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                className="text-center"
              />

              {showHint && (
                <p className="text-muted-foreground text-center animate-fade-in">
                  Hint: {currentWord?.hint}
                </p>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowHint(true)}
                disabled={showHint}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Show Hint
              </Button>
              <Button onClick={handleCheck}>Check Answer</Button>
            </div>

            <div className="flex justify-between items-center pt-4">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <span className="text-muted-foreground">
                {currentIndex + 1} / {words.length}
              </span>
              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={currentIndex === words.length - 1}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VocabularyTopic;