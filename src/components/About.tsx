import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, Brain, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Curiosity-Driven",
      description: "Always eager to explore new technologies and methodologies in data science."
    },
    {
      icon: Code,
      title: "Problem Solver",
      description: "Passionate about turning complex problems into elegant, data-driven solutions."
    },
    {
      icon: Database,
      title: "Data Enthusiast",
      description: "Love uncovering insights and stories hidden within datasets."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Believe in the power of teamwork and knowledge sharing."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, values, and what drives my passion for data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Hi, I'm <span className="text-primary font-semibold">Disul Randinu Gamage</span>, a curious mind and Data Science undergraduate (B.Sc. Hons.) who loves exploring the stories hidden in data.
              </p>
              
              <p className="text-muted-foreground">
                Currently in my 2nd year at <span className="text-primary font-semibold">Sabaragamuwa University of Sri Lanka</span>, I'm passionate about blending creativity with technology to solve real-world problems. My journey has been driven by an insatiable curiosity to understand how data can transform decision-making and create meaningful impact.
              </p>
              
              <p className="text-muted-foreground">
                I believe in the power of continuous learning and experimentation. Whether it's diving deep into machine learning algorithms, building full-stack applications, or collaborating on innovative projects, I approach every challenge with enthusiasm and a growth mindset.
              </p>
              
              <p className="text-muted-foreground">
                Beyond academics, I enjoy teaching and sharing knowledge, which led me to my role as an Assistant English Language Teacher. This experience has enhanced my communication skills and reinforced my belief in the importance of making complex concepts accessible to others.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-glow p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-gradient-primary/10 w-fit group-hover:bg-gradient-primary/20 transition-all duration-300">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-tertiary/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default About;