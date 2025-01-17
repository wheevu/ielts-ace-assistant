import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const topics = [
  {
    id: "academic",
    title: "Academic Vocabulary",
    description: "Essential words for academic writing and speaking",
    count: 50,
  },
  {
    id: "business",
    title: "Business English",
    description: "Common vocabulary used in professional settings",
    count: 40,
  },
  {
    id: "daily-life",
    title: "Daily Life",
    description: "Everyday words and expressions",
    count: 45,
  },
  {
    id: "technology",
    title: "Technology",
    description: "Modern tech and digital terminology",
    count: 35,
  },
  {
    id: "environment",
    title: "Environment",
    description: "Words related to nature and environmental issues",
    count: 30,
  },
];

const Vocabulary = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Vocabulary Topics</h1>
          <p className="text-muted-foreground">Choose a topic to practice vocabulary with flashcards</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card 
              key={topic.id}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up"
              onClick={() => navigate(`/vocabulary/${topic.id}`)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {topic.title}
                </CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {topic.count} words to practice
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;