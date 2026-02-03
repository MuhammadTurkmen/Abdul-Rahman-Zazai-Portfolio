import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6 [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md:max-w-[calc(50%-0.75rem)] [&>*:nth-child(3)]:md:mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <CardTitle className="dark:text-white">{exp.title}</CardTitle>
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
  );
}
