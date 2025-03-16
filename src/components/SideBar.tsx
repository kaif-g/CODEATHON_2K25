import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { Button } from "./ui/button";

const Sidebar = ({
  isOpen,
  setMobileDrawer,
}: {
  isOpen: boolean;
  setMobileDrawer: (prop: boolean) => void;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex lg:hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setMobileDrawer(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`bg-background w-64 h-full shadow-lg transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex bg-background justify-between items-center border-b">
          <h2 className="text-lg font-bold text-gradient">
          Annamacharya Tirupati
          </h2>
          <button onClick={() => setMobileDrawer(false)} className="text-2xl">
            <X />
          </button>
        </div>

        <nav className="mt-5">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              onClick={() => setMobileDrawer(false)}
              className="flex gap-4 px-4 py-3 hover:bg-muted hover:bg-opacity-40 transition-colors duration-300"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
          <Link to={"/join-team"} className="ml-4">
            <Button className="relative houser:bg-muted-foreground/10">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              Join Team
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
