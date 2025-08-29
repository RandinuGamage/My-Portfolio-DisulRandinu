import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Users, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 80 },
        { name: "PHP", level: 70 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      color: "secondary",
      skills: [
        { name: "Statistics", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 75 },
        { name: "Data Visualization", level: 80 },
        { name: "DBMS", level: 85 },
        { name: "Big Data", level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "tertiary",
      skills: [
        { name: "MERN Stack", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      title: "Technical Concepts",
      icon: Wrench,
      color: "primary",
      skills: [
        { name: "OOP", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "System Design", level: 70 },
        { name: "Version Control (Git)", level: 80 },
        { name: "Agile Methodology", level: 75 },
        { name: "Testing", level: 70 }
      ]
    }
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Problem Solving", icon: Brain },
    { name: "Communication", icon: Users },
    { name: "Leadership", icon: Users },
    { name: "Adaptability", icon: Brain },
    { name: "Critical Thinking", icon: Brain },
    { name: "Time Management", icon: Wrench },
    { name: "Creativity", icon: Brain }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary/20 bg-primary/5';
      case 'secondary':
        return 'text-secondary border-secondary/20 bg-secondary/5';
      case 'tertiary':
        return 'text-tertiary border-tertiary/20 bg-tertiary/5';
      default:
        return 'text-primary border-primary/20 bg-primary/5';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and proficiency levels across various domains.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow p-6 bg-card/50 border-border">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Soft <span className="text-gradient">Skills</span>
            </h3>
            <p className="text-muted-foreground">
              Essential interpersonal and professional skills that complement my technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <Card
                key={index}
                className="card-glow p-4 bg-card/30 border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-all duration-300">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-primary/5 border border-primary/20">
            <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Continuous Learning
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              I'm constantly expanding my skill set through online courses, tutorials, and hands-on projects. 
              Currently focusing on advanced machine learning techniques, cloud computing, and modern web frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Machine Learning Specialization',
                'AWS Cloud Practitioner',
                'Advanced React Patterns',
                'Deep Learning Foundations',
                'Data Engineering Basics'
              ].map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;