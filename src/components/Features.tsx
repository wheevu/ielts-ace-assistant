import { BookOpen, MessageSquare, BarChart3, Brain } from "lucide-react";

const features = [
  {
    name: 'IELTS Resources',
    description: 'Access comprehensive study materials covering all IELTS sections.',
    icon: BookOpen,
  },
  {
    name: 'AI Chat Support',
    description: 'Get instant answers and practice speaking with our AI tutor.',
    icon: MessageSquare,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your improvement with detailed performance analytics.',
    icon: BarChart3,
  },
  {
    name: 'Smart Practice',
    description: 'Personalized practice tests adapted to your learning needs.',
    icon: Brain,
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Master IELTS with Confidence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive platform provides all the tools and support you need to achieve your target IELTS score.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start animate-fade-in">
                <div className="rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};