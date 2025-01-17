import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockTest = {
  id: 1,
  title: "Cambridge IELTS 17 Test 1",
  passage: `Reading Passage 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the main idea of the passage?",
      options: ["Option A", "Option B", "Option C", "Option D"],
    },
    {
      id: 2,
      type: "true-false",
      question: "The passage discusses labor and work.",
      options: ["True", "False", "Not Given"],
    },
  ],
};

const PracticeTest = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8 flex-grow pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reading Passage */}
        <Card className="h-[calc(100vh-12rem)]">
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <h2 className="text-2xl font-bold mb-4">{mockTest.title}</h2>
              <div className="prose max-w-none">
                <p className="whitespace-pre-wrap">{mockTest.passage}</p>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Questions */}
        <Card className="h-[calc(100vh-12rem)]">
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <h2 className="text-2xl font-bold mb-4">Questions</h2>
              <div className="space-y-6">
                {mockTest.questions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <p className="font-medium">
                      {question.id}. {question.question}
                    </p>
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <label
                          key={index}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type={
                              question.type === "multiple-choice"
                                ? "radio"
                                : "radio"
                            }
                            name={`question-${question.id}`}
                            className="w-4 h-4"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PracticeTest;