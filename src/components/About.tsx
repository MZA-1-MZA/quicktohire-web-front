
import { Button } from "@/components/ui/button";
import { Award, Globe, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Award },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "10K+", label: "Successful Placements", icon: TrendingUp },
    { number: "15+", label: "Years Experience", icon: Shield }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About QuickToHire
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in the recruitment industry, QuickToHire has 
                established itself as a trusted partner for companies seeking exceptional talent. 
                We combine industry expertise with innovative technology to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced recruiters specializes in various industries, ensuring 
                we understand the unique challenges and requirements of each sector. From startups 
                to Fortune 500 companies, we've helped organizations build winning teams.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <stat.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop" 
                alt="Professional team member" 
                className="rounded-xl shadow-lg object-cover h-64"
              />
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg object-cover h-64 mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
              <p className="font-semibold text-lg">95% Success Rate</p>
              <p className="text-sm opacity-90">in candidate placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
