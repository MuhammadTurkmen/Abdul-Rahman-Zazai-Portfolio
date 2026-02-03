import { Badge } from "../../components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a dedicated IT Support Specialist with extensive experience in
              managing and maintaining IT infrastructure across diverse sectors
              including banking and education. My expertise spans network
              administration, security, and technical support.
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
  );
}
