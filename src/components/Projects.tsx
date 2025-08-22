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
    name: "DeepDetect",
    description: "Deep learning based object detection and recognition project.",
    html_url: "https://github.com/vendotha/DeepDetect",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["Deep Learning", "Computer Vision", "AI"],
    updated_at: "2025-01-28T00:00:00Z",
  },
  
  {
    id: 2,
    name: "Medibot",
    description: "AI-powered medical assistant chatbot using Python, Streamlit, YOLO, and Gemini API for diagnostics and medical consultations.",
    html_url: "https://github.com/vendotha/Medibot",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["AI", "Medical Chatbot", "Computer Vision"],
    updated_at: "2025-08-10T00:00:00Z",
  },
  {
    id: 3,
    name: "Mealzo",
    description: "Full-stack AI-powered food delivery platform with personalized recommendations, real-time tracking, secure payments, and dashboards for all users.",
    html_url: "https://github.com/vendotha/Mealzo",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["Django", "Food Delivery", "AI", "Real-Time Tracking"],
    updated_at: "2025-08-15T00:00:00Z",
  },
  {
    id: 4,
    name: "InstaProfile",
    description: "Facial recognition-powered profile discovery platform using Django, OpenCV, and real-time face detection.",
    html_url: "https://github.com/vendotha/InstaProfile",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["Django", "OpenCV", "Face Recognition"],
    updated_at: "2025-08-01T00:00:00Z",
},
  {
    id: 5,
    name: "DLC_Website",
    description: "Digital Literacy Companion — a supportive platform to enhance digital literacy through interactive lessons, resources, and tools.",
    html_url: "https://github.com/vendotha/DLC_Website",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["Digital Literacy", "EdTech", "Frontend"],
    updated_at: "2025-08-22T00:00:00Z",
},
  {
    id: 6,
    name: "Sentimental Chatbot",
    description: "Conversational Sentiment Bot — analyzes user emotional tone and responds with empathetic, personalized messages using TextBlob.",
    html_url: "https://github.com/vendotha/sentimental-chatbot",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["Sentiment Analysis", "Chatbot", "NLP"],
    updated_at: "2025-08-10T00:00:00Z",
},
  {
    id: 7,
    name: "EduSync",
    description: "EduSync — a synchronized learning platform enabling collaborative study sessions, resource sharing, and real-time progress tracking.",
    html_url: "https://github.com/vendotha/EduSync",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["EdTech", "Collaboration", "Learning Platform"],
    updated_at: "2025-08-22T00:00:00Z",
},
  {
    id: 8,
    name: "Gestura",
    description: "Gesture Mouse Controller – a hands-free mouse control system using webcam-based gesture recognition and machine learning.",
    html_url: "https://github.com/vendotha/Gestura",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["Computer Vision", "Gesture Control", "Accessibility"],
    updated_at: "2025-08-22T00:00:00Z",
},
  {
    id: 9,
    name: "Collision Detection System",
    description: "Vehicle collision detection using Arduino with impact sensor, GPS, and GSM modules to detect accidents and notify emergency contacts.",
    html_url: "https://github.com/vendotha/collision-detection-system",
    language: "C++",
    stargazers_count: 17,
    forks_count: 4,
    topics: ["IoT", "Arduino", "Collision Detection", "GSM", "GPS"],
    updated_at: "2025-01-14T00:00:00Z",
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
