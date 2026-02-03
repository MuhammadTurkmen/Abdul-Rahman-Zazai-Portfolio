import { useState } from "react";
import { Code2, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../../components/theme-provider";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "../../components/ui/sheet";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const ThemeToggle = () => (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-gray-700 dark:text-gray-200" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-400" />
      )}
    </Button>
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <button
        onClick={() => scrollToSection("about")}
        className={`transition-colors ${mobile ? "block w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className={`transition-colors ${mobile ? "block w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className={`transition-colors ${mobile ? "block w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className={`transition-colors ${mobile ? "block w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
      >
        Contact
      </button>
    </>
  );

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 dark:text-white" />
            <span className="font-semibold dark:text-white">Portfolio</span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <NavLinks />
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs sm:max-w-sm p-6"
              >
                <SheetTitle className="mb-1">Navigation</SheetTitle>
                <SheetDescription className="mb-4">
                  Tap a section to navigate
                </SheetDescription>

                <nav className="flex flex-col gap-2 mt-2">
                  {NavLinks({ mobile: true })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
