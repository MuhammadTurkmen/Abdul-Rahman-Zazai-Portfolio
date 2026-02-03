import { useState } from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Briefcase,
  ExternalLink,
  Code2,
  Menu,
  Moon,
  Sun,
  Phone,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { ThemeProvider, useTheme } from "../components/theme-provider";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "../components/ui/sheet";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import Image from "../assets/Profile-image.jpeg";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const experiences = [
    {
      title: "IT Officer",
      company: "New Kabul Bank",
      location: "Kabul, Afghanistan",
      period: "February 2025 - Present",
      description:
        "Monitor and maintain the organization's IT infrastructure, including servers, networks, and end-user systems. Administer and maintain network security systems, including firewall configuration (Sophos) and access controls. Install, update, and maintain IT hardware and software across departments.",
      skills: [
        "Windows Server",
        "Sophos Firewall",
        "Network Security",
        "Active Directory",
      ],
    },
    {
      title: "IT Help Desk Support",
      company: "New Kabul Bank",
      location: "Kabul, Afghanistan",
      period: "July 2024 - February 2025",
      description:
        "Provide first-level technical support to end-users via phone, email, and in-person. Troubleshoot hardware, software, and network-related issues across Windows environments. Support user account management, including password resets and access permissions through Active Directory.",
      skills: [
        "Technical Support",
        "Windows",
        "Active Directory",
        "Troubleshooting",
      ],
    },
    {
      title: "IT Manager",
      company: "MTECH Institute",
      location: "Kabul, Afghanistan",
      period: "January 2017 - January 2019",
      description:
        "Manage and maintain the institute's LAN, internet, and IT infrastructure. Oversee computer lab operations and ensure devices are functional and up to date. Provide technical support for trainers, staff, and training sessions. Monitor internet usage and maintain network security.",
      skills: [
        "LAN Management",
        "Network Security",
        "IT Infrastructure",
        "Technical Support",
      ],
    },
  ];

  const projects = [
    {
      title: "Network Infrastructure Overhaul",
      description:
        "Redesigned and implemented secure network infrastructure with Sophos firewall configuration and access control policies.",
      image:
        "https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHByb2Zlc3Npb25hbCUyMG5ldHdvcmslMjBzZXJ2ZXJ8ZW58MXx8fHwxNzcwMDMyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Cisco", "Sophos", "Network Security", "Infrastructure"],
      link: "#",
    },
    {
      title: "Active Directory Management System",
      description:
        "Streamlined user account management and access permissions system using Active Directory for enterprise-level organization.",
      image:
        "https://images.unsplash.com/photo-1767556246716-d72df36302ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzAwMzI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Active Directory", "Windows Server", "User Management"],
      link: "#",
    },
    {
      title: "Computer Lab Modernization",
      description:
        "Managed complete modernization of computer lab facilities including hardware upgrades, software installation, and network optimization.",
      image:
        "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzAwMzI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Hardware", "LAN", "Education", "IT Support"],
      link: "#",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you for your message! I'll get back to you soon.");
    reset();
  };

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("about")}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Contact
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 dark:text-white" />
              <span className="font-semibold dark:text-white">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center">
              <NavLinks />
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Navigate to different sections of the portfolio
                  </SheetDescription>
                  <nav className="flex flex-col gap-4 mt-8">
                    <NavLinks />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
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
                Motivated IT professional with 3+ years of experience in
                providing technical support and managing IT infrastructure
                across banking, government, and educational sectors. Proficient
                in network administration, Windows Server, Active Directory,
                Cisco networks, and Sophos firewall.
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
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-2/2 rounded-2xl overflow-hidden">
                <img
                  src={Image}
                  alt="Profile"
                  className="w-full h-full rounded-2xl object-top md:object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a dedicated IT Support Specialist with extensive experience
                in managing and maintaining IT infrastructure across diverse
                sectors including banking and education. My expertise spans
                network administration, security, and technical support.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Known for strong problem-solving skills, reliability, and the
                ability to work both independently and collaboratively. I hold
                multiple certifications including Cisco Certified Network
                Associate and Microsoft Certified Solution Expert.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I graduated from Jahan University with a Bachelor of Science in
                Computer Science in 2022, with relevant coursework in Network
                Engineering.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Windows Server</Badge>
                <Badge>Active Directory</Badge>
                <Badge>Cisco Routing & Switching</Badge>
                <Badge>Sophos Firewall</Badge>
                <Badge>Network Security</Badge>
                <Badge>Microsoft Office 365</Badge>
                <Badge>Desktop/Hardware Support</Badge>
                <Badge>Network Troubleshooting</Badge>
                <Badge>CCTV Cameras</Badge>
                <Badge>Exchange Server</Badge>
              </div>
              <h3 className="font-semibold mb-4 dark:text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Pashto (Native)</Badge>
                <Badge variant="secondary">Dari (Fluent)</Badge>
                <Badge variant="secondary">English (Excellent)</Badge>
                <Badge variant="secondary">Urdu (Excellent)</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6 [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md:max-w-[calc(50%-0.75rem)] [&>*:nth-child(3)]:md:mx-auto">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="flex flex-col gap-2">
                    <CardTitle className="dark:text-white">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </CardDescription>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section
        id="education"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Education
              </h3>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Bachelor of Science in Computer Science
                  </CardTitle>
                  <CardDescription>
                    Jahan University, Kabul, Afghanistan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Graduated: 2022
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Relevant coursework: Network Engineering
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Certifications
              </h3>
              <div className="space-y-4">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Badge className="w-5 h-5 bg-transparent text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white">
                          Cisco Certified Network Associate
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Network Administration
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Badge className="w-5 h-5 bg-transparent text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white">
                          Microsoft Certified Solution Expert
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Microsoft Technologies
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Badge className="w-5 h-5 bg-transparent text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white">
                          Diploma in Information Technology
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          IT Fundamentals
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Badge className="w-5 h-5 bg-transparent text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white">
                          CCTV Cameras & Exchange Server
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Security & Communication Systems
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between dark:text-white">
                    <span className="text-base">{project.title}</span>
                    <a
                      href={project.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always open to discussing new opportunities, technical
              projects, or IT consultations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-xl font-semibold mb-6 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:ArahmanZazai@Yahoo.com"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Email
                      </p>
                      <p className="font-medium">ArahmanZazai@Yahoo.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+93767290778"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Phone
                      </p>
                      <p className="font-medium">+93-767-290-778</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Location
                      </p>
                      <p className="font-medium">New St., Kabul, Afghanistan</p>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        LinkedIn
                      </p>
                      <p className="font-medium">Connect with me</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 order-1 lg:order-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What would you like to discuss?"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me more about your project or inquiry..."
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Abdul Rahman Zazai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <Portfolio />
    </ThemeProvider>
  );
}
