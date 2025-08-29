import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* 404 Animation */}
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-bold text-gradient animate-pulse-glow">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-primary/20 blur-3xl -z-10"></div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => window.location.href = '/'}
            className="btn-glow bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-primary-foreground"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-tertiary/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;
