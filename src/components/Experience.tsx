import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, Users, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Manager",
      company: "WISDOM Institute",
      location: "Kalutara, Sri Lanka",
      period: "February 2023 - December 2023",
      type: "Management",
      icon: Briefcase,
      description: "Led team operations and strategic initiatives while developing leadership and organizational skills.",
      achievements: [
        "Successfully managed team operations and workflow optimization",
        "Developed strong leadership and decision-making capabilities",
        "Enhanced project management and coordination skills",
        "Built experience in strategic planning and execution"
      ]
    },
    {
      title: "Assistant English Language Teacher",
      company: "Holy Cross College",
      location: "Payagala, Sri Lanka",
      period: "December 2023",
      type: "Teaching",
      icon: BookOpen,
      description: "Provided English language instruction and support to students, focusing on improving communication skills and academic performance.",
      achievements: [
        "Enhanced students' English proficiency through interactive teaching methods",
        "Developed lesson plans tailored to different learning styles",
        "Improved classroom engagement and participation rates",
        "Collaborated with fellow educators to create comprehensive learning materials"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experiences that have shaped my skills in leadership, education, and teamwork.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-secondary hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-glow relative md:ml-20 p-6 md:p-8 bg-card/50 border-border hover:border-secondary/50 transition-all duration-300 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 top-8 w-6 h-6 bg-gradient-secondary rounded-full border-4 border-background items-center justify-center hidden md:flex">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-gradient-secondary/10 group-hover:bg-gradient-secondary/20 transition-all duration-300">
                      <exp.icon className="h-8 w-8 text-secondary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-secondary mb-3">
                          {exp.company}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Gained Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-secondary/5 border border-secondary/20">
            <h4 className="font-semibold text-secondary mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Professional Skills Developed
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Leadership',
                'Team Management',
                'Communication',
                'Project Coordination',
                'Problem Solving',
                'Strategic Planning',
                'Teaching & Mentoring',
                'Adaptability'
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-background/70 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;