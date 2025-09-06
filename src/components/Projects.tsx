import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, Code, Database } from 'lucide-react';

const Projects = () => {
  const featuredProject = {
    title: "EduPilot",
    subtitle: "Capstone Project - Administrative System",
    description: "A comprehensive administrative system designed for tuition institutes, enabling administrators to efficiently manage classes, fees, income tracking, and student attendance through a modern web interface.",
    longDescription: "EduPilot streamlines the administrative workflow of educational institutions by providing an intuitive dashboard for managing all aspects of tuition operations. The system features real-time data analytics, automated reporting, and seamless user experience for both administrators and students.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    features: [
      "Class Management System",
      "Fee Collection & Tracking",
      "Income Analytics Dashboard",
      "Student Attendance Monitoring",
      "Real-time Reporting",
      "User Role Management",
      "Responsive Design",
      "Data Export Capabilities"
    ],
    status: "Completed",
    timeline: "6 months",
    teamSize: "Individual Project",
    category: "Full-Stack Web Application"
  };

  const additionalProjects = [
    {
      title: "Data Analysis Portfolio",
      description: "Collection of data science projects showcasing statistical analysis, machine learning models, and data visualization techniques.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      status: "Ongoing"
    },
    {
      title: "Student Management API",
      description: "RESTful API for managing student information, built with modern backend technologies and comprehensive documentation.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      status: "Completed"
    },
    {
      title: "Interactive Dashboard",
      description: "Dynamic dashboard for visualizing academic performance metrics with interactive charts and real-time updates.",
      technologies: ["React", "D3.js", "Chart.js", "CSS3"],
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my development work, highlighting technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <Card className="card-glow overflow-hidden bg-card/50 border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image/Visual */}
              <div className="bg-gradient-primary/10 p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary/5"></div>
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                    <Database className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">{featuredProject.title}</h3>
                    <p className="text-muted-foreground">{featuredProject.category}</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{featuredProject.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{featuredProject.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{featuredProject.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{featuredProject.longDescription}</p>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{featuredProject.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{featuredProject.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{featuredProject.status}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {/* <Button className="btn-glow bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button> */}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Other <span className="text-gradient">Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="card-glow p-6 bg-card/30 border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-tertiary/10 text-tertiary border border-tertiary/20' 
                        : project.status === 'In Progress'
                        ? 'bg-secondary/10 text-secondary border border-secondary/20'
                        : 'bg-primary/10 text-primary border border-primary/20'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {/* <Button size="sm" variant="outline" className="text-xs border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs border-muted-foreground/50 text-muted-foreground hover:bg-muted">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;