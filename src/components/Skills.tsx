import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  GitBranch,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      description: "Frontend and backend web technologies",
      skills: [
        { name: "React/TypeScript", level: 75, color: "bg-blue-500" },
        { name: "Node.js/Express", level: 80, color: "bg-green-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "Django", level: 85, color: "bg-gray-800" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Artificial intelligence and data science",
      skills: [
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "TensorFlow/PyTorch", level: 70, color: "bg-red-500" },
        { name: "Computer Vision", level: 65, color: "bg-purple-500" },
        { name: "NLP", level: 60, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      description: "Core programming and software development",
      skills: [
        { name: "JavaScript/TypeScript", level: 70, color: "bg-yellow-400" },
        { name: "Python", level: 85, color: "bg-green-400" },
        { name: "Java", level: 80, color: "bg-red-400" },
        { name: "C++", level: 70, color: "bg-blue-400" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      description: "Development tools and platforms",
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-gray-600" },
        { name: "Docker", level: 65, color: "bg-blue-600" },
        { name: "AWS", level: 60, color: "bg-orange-600" },
        { name: "MongoDB", level: 70, color: "bg-green-600" }
      ]
    }
  ];

  const tools = [
    "VS Code", "PyCharm", "Jupyter", "Figma", "Postman", 
    "Firebase", "Vercel", "Netlify", "Linux", "Windows"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and expanding my expertise in web development and AI technologies
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-card transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-accent">
                <Monitor className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <CardTitle>Tools & Platforms</CardTitle>
                <CardDescription>
                  Development tools and technologies I work with regularly
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge 
                  key={tool} 
                  variant="outline" 
                  className="bg-muted/50 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <Card className="mt-8 bg-gradient-subtle border-primary/20 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary" />
              Currently Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-semibold text-primary mb-2">Advanced AI</h4>
                <p className="text-sm text-muted-foreground">
                  Deep Learning & Transformer Models
                </p>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                <h4 className="font-semibold text-accent mb-2">Cloud Computing</h4>
                <p className="text-sm text-muted-foreground">
                  AWS & Serverless Architecture
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-semibold text-primary mb-2">DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  CI/CD & Container Orchestration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;