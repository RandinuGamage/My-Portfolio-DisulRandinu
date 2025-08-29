import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in pursuing knowledge and building a strong foundation in data science.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-primary"></div>

            {/* Education Item */}
            <Card className="card-glow relative ml-20 p-8 bg-card/50 border-border">
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-8 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      B.Sc. (Hons.) in Data Science
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Sabaragamuwa University of Sri Lanka
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>2nd Year - Currently Pursuing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Belihuloya, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Key Areas of Study:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Statistical Analysis & Modeling',
                        'Machine Learning Algorithms',
                        'Database Management Systems',
                        'Programming (Python, Java, R)',
                        'Data Visualization',
                        'Big Data Analytics',
                        'Object-Oriented Programming',
                        'Web Development (MERN Stack)'
                      ].map((subject, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-primary">Current Focus:</span> Building strong foundations in statistical modeling, machine learning, and full-stack development while working on practical projects that bridge theoretical knowledge with real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Future Goals */}
            <div className="mt-8 ml-20">
              <Card className="p-6 bg-gradient-primary/5 border border-primary/20">
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Looking Ahead
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Eager to pursue advanced studies and certifications in specialized areas like deep learning, 
                  artificial intelligence, and data engineering to stay at the forefront of technological innovation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;