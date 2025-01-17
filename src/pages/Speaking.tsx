import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, List, Info } from "lucide-react";

const Speaking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">IELTS Speaking</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A face-to-face interview to assess your spoken English abilities.
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
                    <h3 className="font-semibold mb-2">Part 1 (4-5 minutes)</h3>
                    <ul className="space-y-2">
                      <li>• Introduction and general questions</li>
                      <li>• Familiar topics (home, family, work)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Part 2 (3-4 minutes)</h3>
                    <ul className="space-y-2">
                      <li>• Individual long turn</li>
                      <li>• Speak for 2 minutes on a given topic</li>
                      <li>• 1 minute to prepare</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Part 3 (4-5 minutes)</h3>
                    <ul className="space-y-2">
                      <li>• Two-way discussion</li>
                      <li>• More abstract questions</li>
                      <li>• Related to Part 2 topic</li>
                    </ul>
                  </div>
                </div>
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
                  Speaking Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <CardDescription className="font-semibold mb-2">General Tips</CardDescription>
                  <ul className="space-y-2">
                    <li>• Speak clearly and confidently</li>
                    <li>• Use natural intonation</li>
                    <li>• Give extended answers</li>
                    <li>• Ask for clarification if needed</li>
                  </ul>
                </div>
                <div>
                  <CardDescription className="font-semibold mb-2">Part 2 Tips</CardDescription>
                  <ul className="space-y-2">
                    <li>• Use your preparation time wisely</li>
                    <li>• Structure your talk</li>
                    <li>• Include specific examples</li>
                    <li>• Practice time management</li>
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

export default Speaking;