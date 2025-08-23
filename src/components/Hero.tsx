import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import profileImage from "@/assets/profile.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroBanner}
          alt="Abstract tech background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-glow/20 rounded-full blur-xl animate-glow-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="max-w-5xl mx-auto bg-card text-card-foreground backdrop-blur-sm shadow-elegant border-0">

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                    <img
                      src={profileImage}
                      alt="Profile headshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-accent p-3 rounded-full shadow-card">
                    <Badge variant="secondary" className="text-xs font-medium">
                      Available
                    </Badge>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="flex-1 text-center md:text-left space-y-6"
                >
                  <div className="space-y-3">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                      Buvananand Vendotha
                    </h1>
                    <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                      Full-Stack Developer & AI/ML Innovator
                    </h2>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {[
                      "Python",
                      "Django",
                      "React",
                      "TypeScript",
                      "Machine Learning",
                      "Node.js",
                      "AI/ML",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    {/* Resume download button */}
                    <a
                      href="/Buvananand_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </a>

                    <div className="flex gap-2">
                      <a
                        href="https://github.com/vendotha"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-primary/20 hover:bg-primary/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </a>

                      <a
                        href="https://linkedin.com/in/vendotha"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-primary/20 hover:bg-primary/10"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                      </a>

                      <a href="mailto:vendotha@gmail.com">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-primary/20 hover:bg-primary/10"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
