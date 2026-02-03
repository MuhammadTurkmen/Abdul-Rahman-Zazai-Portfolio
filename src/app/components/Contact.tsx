import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();
  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you for your message! I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities, technical projects,
            or IT consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-start space-y-6 order-2 lg:order-1">
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
  );
}
