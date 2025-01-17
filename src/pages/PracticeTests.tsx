import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const practiceTests = [
  {
    id: 1,
    title: "Cambridge IELTS 17 Test 1",
    difficulty: "Medium",
    time: "60 minutes",
  },
  {
    id: 2,
    title: "Cambridge IELTS 17 Test 2",
    difficulty: "Medium",
    time: "60 minutes",
  },
  {
    id: 3,
    title: "Cambridge IELTS 17 Test 3",
    difficulty: "Hard",
    time: "60 minutes",
  },
  // Add more practice tests as needed
];

const PracticeTests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex-grow pt-24">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <BookOpen className="h-8 w-8" />
          IELTS Reading Practice Tests
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceTests.map((test) => (
            <Link
              key={test.id}
              to={`/practice-test/${test.id}`}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{test.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Difficulty: {test.difficulty}
                    </p>
                    <p className="text-sm text-gray-600">Time: {test.time}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PracticeTests;