import { Button } from "../../components/ui/button";
import { Phone, Mail, Linkedin } from "lucide-react";
import Image from "../../assets/Profile-image.jpeg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 dark:text-white">
              Hi, I'm Abdul Rahman Zazai
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              IT Support Specialist & Network Administrator
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Motivated IT professional with 3+ years of experience in providing
              technical support and managing IT infrastructure across banking,
              government, and educational sectors. Proficient in network
              administration, Windows Server, Active Directory, Cisco networks,
              and Sophos firewall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="tel:+93767290778"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:ArahmanZazai@Yahoo.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="http://linkedin.com/in/rahman-zazai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="md:aspect-2/2 rounded-2xl overflow-hidden">
              <img
                src={Image}
                alt="Profile"
                className="w-full h-full rounded-2xl object-contain md:object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
