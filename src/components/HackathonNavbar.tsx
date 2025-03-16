import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";
import { HackFestNavItems } from "../constants";
import { Button } from "./ui/button";

export const HackathonNavbar = ({
  mobileDrawer,
  toggleDrawer,
}: {
  mobileDrawer: boolean;
  toggleDrawer: () => void;
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 z-50 w-full border-b py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-8">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent font-bold sm:text-lg lg:text-xl">
             ANNAMACHARYA CODEATHON 2K25
            </span>
          </div>
        </Link>

        {/* Nav Items */}
        <ul className={`lg:flex gap-8 mr-40 ${mobileDrawer ? 'flex flex-col' : 'hidden'}`}>
          {HackFestNavItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="text-foreground/90 tracking-wide hover:text-muted-foreground font-medium transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* theme toggle & mobile menu */}
        <div className="flex gap-4 items-center">
            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmhETKuZvrNxMTJyymX1KKXdEj5Bub7k1QzhoNxeq8IpqkJw/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
            >
            <Button className="relative border-2 border-indigo-600 bg-transparent hover:bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 hover:text-white transition-all duration-300 text-foreground dark:text-white">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              Register Now
            </Button>
            </a>
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500" />
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end group cursor-pointer">
            <div onClick={toggleDrawer} className="space-y-1">
              <div
                className={`w-4 h-0.5 bg-foreground duration-500 rounded-full ${
                  mobileDrawer && "rotate-45 translate-y-1.5 scale-x-125"
                }`}
              ></div>
              <div
                className={`w-4 h-0.5 bg-foreground origin-left rounded-full duration-500 ${
                  mobileDrawer && "scale-x-0"
                }`}
              ></div>
              <div
                className={`w-4 h-0.5 bg-foreground duration-500 rounded-full ${
                  mobileDrawer && "-rotate-45 -translate-y-1.5 scale-x-125"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
