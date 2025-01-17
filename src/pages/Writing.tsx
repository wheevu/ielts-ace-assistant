import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, List, Info } from "lucide-react";

const Writing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">IELTS Writing</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Demonstrate your written English skills through two different tasks.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Task Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Task 1 (20 minutes)</h3>
                    <ul className="space-y-2">
                      <li>• Minimum 150 words</li>
                      <li>• Describe visual information</li>
                      <li>• Academic: graphs, charts, diagrams</li>
                      <li>• General: letter writing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Task 2 (40 minutes)</h3>
                    <ul className="space-y-2">
                      <li>• Minimum 250 words</li>
                      <li>• Essay writing</li>
                      <li>• Present and justify opinions</li>
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
                  <li>• Task Achievement/Response</li>
                  <li>• Coherence and Cohesion</li>
                  <li>• Lexical Resource</li>
                  <li>• Grammatical Range and Accuracy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Writing Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <CardDescription className="font-semibold mb-2">Task 1</CardDescription>
                  <ul className="space-y-2">
                    <li>• Start with an overview</li>
                    <li>• Group similar information</li>
                    <li>• Use appropriate linking words</li>
                    <li>• Include key features only</li>
                  </ul>
                </div>
                <div>
                  <CardDescription className="font-semibold mb-2">Task 2</CardDescription>
                  <ul className="space-y-2">
                    <li>• Plan your essay structure</li>
                    <li>• Use specific examples</li>
                    <li>• Write clear topic sentences</li>
                    <li>• Check your work at the end</li>
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

export default Writing;