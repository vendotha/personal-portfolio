import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Award,
  Calendar,
  MapPin
} from "lucide-react";

const Resume = () => {
  // ✅ Direct static path to resume
  const resumeUrl = "/Buvananand_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Buvananand_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Mock Data (Education, Experience, Achievements)
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Maturi Venkata Subba Rao (MVSR) Engineering College",
      period: "2023 - 2026",
      location: "Hyderabad, Telangana",
      gpa: "8.33/10",
      relevant: [
        "Computer Networks", "Operating Systems", "Machine Learning",
        "Data Structures", "Computer Organization", "Cyber Security", "Internet of Things"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "TRR College Of Technology",
      period: "2020 - 2023",
      location: "Hyderabad, Telangana",
      gpa: "8.54/10",
      relevant: [
        "Software Engineering", "Digital Electronics", "Microprocessors",
        "Database Management Systems", "Cryptography and Network Security", "Web Technologies"
      ]
    },
  ];

  const experience = [
    {
      title: "Research Fellow",
      company: "Dyne Research",
      period: "January 2025 - April 2025",
      location: "Remote",
      description: "Collaborated with mentors and researchers to enhance dataset quality, refine methodologies, and address ethical considerations in AI-generated media.",
      technologies: [
        "Python", "PyTorch", "TensorFlow", "Hugging Face Transformers", "OpenCV",
        "NumPy", "Pandas", "Scikit-learn", "CUDA", "GANs", "Diffusion Models"
      ]
    },
    {
      title: "Apprentice",
      company: "NSIC Technical Services Center",
      period: "June 2022 - November 2022",
      location: "Hyderabad, Telangana",
      description: "Implemented gesture recognition algorithms to map hand movements to system commands for seamless user experience.",
      technologies: [
        "Python", "Django", "OpenCV", "MediaPipe", "JavaScript", "HTML", "CSS", "SQLite"
      ]
    }
  ];

  const achievements = [
    "Dyne Research Idea Labs 2025 - Selected among 10,000 applicants",
    "Inter-College Hackathon 2024 - Finalist",
    "National AI/ML Challenge 2023 - Top 10%",
    "Open-Source Contributor Recognition 2024"
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#d0ff00" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background, professional experience, and key achievements
          </p>
        </div>

        {/* Download Section */}
        <Card className="mb-12 bg-white border-0 shadow-glow animate-scale-in">
          <CardContent className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-gray-100 rounded-full">
                <FileText className="h-8 w-8 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Download My Resume</h3>
                <p className="text-gray-600 mb-4">
                  Get the complete PDF version of my resume with detailed information
                </p>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleDownload}
                className="bg-gray-800 hover:bg-gray-900 text-white border-gray-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education */}
          <Card className="lg:col-span-2 animate-slide-up bg-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-accent">
                  <GraduationCap className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Academic background and relevant coursework</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">{edu.school}</span> • GPA: {edu.gpa}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.relevant.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="animate-slide-up delay-200 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Recognition and milestones</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="lg:col-span-3 animate-fade-in delay-400 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-accent">
                  <Briefcase className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle>Professional Experience</CardTitle>
                  <CardDescription>Work experience and professional projects</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-accent/20 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Technologies Used:</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
