import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, List, Info } from "lucide-react";

const Listening = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">IELTS Listening</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Test your ability to understand spoken English in various contexts.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Test Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Duration</h3>
                    <ul className="space-y-2">
                      <li>• Approximately 30 minutes</li>
                      <li>• 10 minutes to transfer answers</li>
                      <li>• 40 questions total</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sections</h3>
                    <ul className="space-y-2">
                      <li>• Section 1: Social context</li>
                      <li>• Section 2: Social context</li>
                      <li>• Section 3: Educational context</li>
                      <li>• Section 4: Academic context</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <List className="h-5 w-5 text-primary" />
                  Question Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Multiple choice</li>
                  <li>• Matching</li>
                  <li>• Plan/map/diagram labelling</li>
                  <li>• Form completion</li>
                  <li>• Note completion</li>
                  <li>• Table completion</li>
                  <li>• Flow-chart completion</li>
                  <li>• Summary completion</li>
                  <li>• Sentence completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Listening Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <CardDescription className="font-semibold mb-2">Before Listening</CardDescription>
                  <ul className="space-y-2">
                    <li>• Read instructions carefully</li>
                    <li>• Predict possible answers</li>
                    <li>• Note word limits</li>
                    <li>• Understand the situation</li>
                  </ul>
                </div>
                <div>
                  <CardDescription className="font-semibold mb-2">During Listening</CardDescription>
                  <ul className="space-y-2">
                    <li>• Listen for signpost words</li>
                    <li>• Write as you listen</li>
                    <li>• Keep up with the recording</li>
                    <li>• Watch for distractors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listening;