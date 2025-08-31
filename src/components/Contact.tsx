import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "randinugamage1121@gmail.com",
      href: "mailto:randinugamage1121@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94771963634",
      href: "tel:+94771963634",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      href: "#",
      color: "tertiary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/disul",
      href: "https://linkedin.com/in/disul",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/disul",
      href: "https://github.com/disul",
      color: "secondary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/20 hover:bg-primary/20';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/20 hover:bg-secondary/20';
      case 'tertiary':
        return 'text-tertiary bg-tertiary/10 border-tertiary/20 hover:bg-tertiary/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20 hover:bg-primary/20';
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
                Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-glow p-4 bg-card/30 border-border hover:border-primary/30 transition-all duration-300 group">
                  <a
                    href={info.href}
                    className="flex items-center gap-4 text-left w-full"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`p-3 rounded-xl transition-all duration-300 ${getColorClasses(info.color)}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Download CV */}
            <Card className="p-6 bg-gradient-primary/5 border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Download My Resume</h4>
                  <p className="text-muted-foreground text-sm">Get a detailed overview of my experience and skills.</p>
                </div>
                <Button className="btn-glow bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-primary-foreground">
                  <Download className="mr-2 h-4 w-4" />
                  CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-glow p-8 bg-card/50 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  required
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-primary-foreground font-semibold py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Required fields. I typically respond within 24 hours.
              </p>
            </form>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-gradient-secondary/5 border border-secondary/20 max-w-4xl mx-auto">
            <h4 className="font-semibold text-secondary mb-3">Open to Opportunities</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm currently open to internship opportunities, freelance projects, and collaborations in data science, 
              web development, and innovative tech solutions. If you have an exciting opportunity or project in mind, 
              let's discuss how we can work together to create something amazing!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;