import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Microphone, Clock, List, Info } from "lucide-react";

const Speaking = () => {
  return (
    <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="space-y-8 animate-fade-in">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">IELTS Speaking</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Improve your speaking skills with our interactive practice sessions.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Time and Format
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Total time: 11-14 minutes</li>
                <li>• Three parts: Introduction, Long Turn, Discussion</li>
                <li>• Speak on a given topic for 1-2 minutes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <List className="h-5 w-5 text-primary" />
                Assessment Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Fluency and Coherence</li>
                <li>• Lexical Resource</li>
                <li>• Grammatical Range and Accuracy</li>
                <li>• Pronunciation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow md:col-span-2 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Tips for Success
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <CardDescription className="font-semibold mb-2">Practice Regularly</CardDescription>
                <ul className="space-y-2">
                  <li>• Engage in conversations with friends</li>
                  <li>• Record yourself speaking</li>
                  <li>• Use IELTS speaking prompts</li>
                </ul>
              </div>
              <div>
                <CardDescription className="font-semibold mb-2">Stay Calm and Confident</CardDescription>
                <ul className="space-y-2">
                  <li>• Take deep breaths before speaking</li>
                  <li>• Listen carefully to the examiner</li>
                  <li>• Don't rush your answers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Speaking;
