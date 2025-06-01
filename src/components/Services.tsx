import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, CheckCircle, Briefcase, UserSearch, UserCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Talent Sourcing",
      description: "We find the best candidates from our extensive network and databases to match your specific requirements.",
      features: ["Active & Passive Candidates", "Industry Specialists", "Global Reach"]
    },
    {
      icon: Users,
      title: "Volume Recruiting",
      description: "Scale your hiring with our efficient processes designed for high-volume recruitment needs.",
      features: ["Bulk Hiring Solutions", "Streamlined Process", "Quick Turnaround"]
    },
    {
      icon: CheckCircle,
      title: "Executive Search",
      description: "Find C-level and senior executives through our specialized executive search methodology.",
      features: ["Senior Leadership", "Confidential Search", "Market Mapping"]
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for temporary, contract, and project-based positions.",
      features: ["Flexible Terms", "Quick Deployment", "Compliance Management"]
    },
    {
      icon: UserSearch,
      title: "Recruitment Consulting",
      description: "Strategic guidance to optimize your recruitment processes and employer branding.",
      features: ["Process Optimization", "Employer Branding", "Market Intelligence"]
    },
    {
      icon: UserCheck,
      title: "Background Verification",
      description: "Comprehensive background checks and verification services for all your hires.",
      features: ["Identity Verification", "Employment History", "Reference Checks"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Recruitment Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sourcing to onboarding, we provide end-to-end recruitment solutions 
            tailored to your business needs and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader>
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
