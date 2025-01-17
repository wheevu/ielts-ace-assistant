import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, List, Info } from "lucide-react";

const Listening = () => {
  return (
    <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="space-y-8 animate-fade-in">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">IELTS Listening</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your listening comprehension with our curated practice materials.
          </p>
        </section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Listening Format
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Four sections with increasing difficulty</li>
                <li>• 40 questions in total</li>
                <li>• 30 minutes to complete the listening test</li>
                <li>• 10 minutes to transfer answers to the answer sheet</li>
              </ul>
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
                <li>• Plan/map/diagram labeling</li>
                <li>• Form completion</li>
                <li>• Note taking</li>
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
                <CardDescription className="font-semibold mb-2">Active Listening</CardDescription>
                <ul className="space-y-2">
                  <li>• Focus on the main ideas</li>
                  <li>• Listen for specific information</li>
                  <li>• Practice with different accents</li>
                </ul>
              </div>
              <div>
                <CardDescription className="font-semibold mb-2">Test Strategies</CardDescription>
                <ul className="space-y-2">
                  <li>• Read questions before listening</li>
                  <li>• Take notes while listening</li>
                  <li>• Review your answers carefully</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Listening;