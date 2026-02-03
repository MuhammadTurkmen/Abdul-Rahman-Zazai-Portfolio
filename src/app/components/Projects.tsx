import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Network Infrastructure Overhaul",
    description:
      "Redesigned and implemented secure network infrastructure with Sophos firewall configuration and access control policies.",
    image:
      "https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Cisco", "Sophos", "Network Security", "Infrastructure"],
    link: "#",
  },
  {
    title: "Active Directory Management System",
    description:
      "Streamlined user account management and access permissions system using Active Directory for enterprise-level organization.",
    image:
      "https://images.unsplash.com/photo-1767556246716-d72df36302ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Active Directory", "Windows Server", "User Management"],
    link: "#",
  },
  {
    title: "Computer Lab Modernization",
    description:
      "Managed complete modernization of computer lab facilities including hardware upgrades, software installation, and network optimization.",
    image:
      "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Hardware", "LAN", "Education", "IT Support"],
    link: "#",
  },
];

export default function Projects() {
  return (
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
  );
}
