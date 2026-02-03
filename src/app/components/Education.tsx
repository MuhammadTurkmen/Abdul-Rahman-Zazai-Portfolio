import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Calendar } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
                  <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Graduated: 2022
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Relevant coursework: Network Engineering
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">
              Certifications
            </h3>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Badge className="w-3 h-3 bg-transparent text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium dark:text-white">
                        Cisco Certified Network Associate
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Network Administration
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Badge className="w-3 h-3 bg-transparent text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium dark:text-white">
                        Microsoft Certified Solution Expert
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Microsoft Technologies
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Badge className="w-3 h-3 bg-transparent text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium dark:text-white">
                        Diploma in Information Technology
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        IT Fundamentals
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Badge className="w-3 h-3 bg-transparent text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium dark:text-white">
                        CCTV Cameras & Exchange Server
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Security & Communication Systems
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
