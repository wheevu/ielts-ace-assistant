const Writing = () => {
  return (
    <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="space-y-8 animate-fade-in">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">IELTS Writing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master academic and general writing tasks with our comprehensive practice materials.
          </p>
        </section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Task 1: Academic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Learn how to describe visual information effectively.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Task 2: Academic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Develop your argumentation skills for essay writing.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                General Writing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Understand the differences between academic and general writing tasks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Writing Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get tips on how to improve your writing skills and score higher.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Writing;
