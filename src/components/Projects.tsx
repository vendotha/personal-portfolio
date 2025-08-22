import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

const dummyProjects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "My personal portfolio built with React, Tailwind, and ShadCN UI.",
    html_url: "https://github.com/vendotha/portfolio",
    language: "TypeScript",
    stargazers_count: 10,
    forks_count: 2,
    topics: ["React", "Tailwind", "Frontend"],
    updated_at: "2025-01-15T00:00:00Z",
  },
  {
    id: 2,
    name: "Chatbot App",
    description: "AI-powered chatbot using Node.js and Express with OpenAI API.",
    html_url: "https://github.com/vendotha/chatbot-app",
    language: "JavaScript",
    stargazers_count: 25,
    forks_count: 5,
    topics: ["AI", "Node.js", "Express"],
    updated_at: "2025-02-05T00:00:00Z",
  },
  {
    id: 3,
    name: "E-commerce Store",
    description: "Full-stack e-commerce platform with payment integration.",
    html_url: "https://github.com/vendotha/ecommerce-store",
    language: "Python",
    stargazers_count: 40,
    forks_count: 12,
    topics: ["Django", "E-commerce", "Backend"],
    updated_at: "2025-01-28T00:00:00Z",
  },
];

const Projects = () => {
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      "Node.js": "bg-green-600",
      Java: "bg-red-500",
      "C++": "bg-blue-600",
    };
    return colors[language] || "bg-gray-500";
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development, AI, and software engineering
          </p>
        </div>

        {dummyProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyProjects.map((repo, index) => (
              <Card
                key={repo.id}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle
                        className="text-lg group-hover:text-primary transition-colors cursor-pointer"
                        onClick={() => window.open(repo.html_url, "_blank")}
                      >
                        {repo.name}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <div
                              className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}
                            ></div>
                            <span className="text-xs text-muted-foreground">{repo.language}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(repo.html_url, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-sm line-clamp-3">
                    {repo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {repo.topics?.slice(0, 4).map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                    <span className="text-xs">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/20 hover:bg-primary/10"
                      onClick={() => window.open(repo.html_url, "_blank")}
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:bg-primary/10"
                      disabled
                      title="Live demo not available"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No projects available.</p>
        )}

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/10"
            onClick={() => window.open("https://github.com/vendotha", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
