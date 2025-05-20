import {
  LayoutDashboard,
  Workflow,
  GalleryVerticalEnd,
  UserRoundPen,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { cn } from "../utils/cn";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Separator } from "@radix-ui/react-separator";

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={22} />,
    route: "/dashboard",
  },
  {
    label: "Workspaces",
    icon: <Workflow size={22} />,
    route: "/workspace",
  },
  {
    label: "History",
    icon: (
      <GalleryVerticalEnd
        size={22}
        className="transform rotate-180 origin-center"
      />
    ),
    route: "/history",
  },
  {
    label: "Profile",
    icon: <UserRoundPen size={22} />,
    route: "/profile",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-900 hover:text-blue-600 bg-white p-2 rounded-full shadow"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col justify-between text-black h-full py-6 px-4",
          "fixed top-0 left-0 z-40 md:relative md:z-auto",
          "md:translate-x-0 md:w-72 md:rounded-tr-2xl md:rounded-br-2xl",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64 md:w-72"
        )}
      >
        <div>
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Link to="/">
              <img src={logo} alt="logo" className="w-28 h-28 object-contain" />
            </Link>
          </div>
          <Separator className="h-[1px] w-full bg-gray-300 my-4" />

          {/* Sidebar items */}
          <div className="flex flex-col gap-3">
            {sidebarItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  navigate(item.route);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-4 px-5 py-3 rounded-md transition-colors duration-200 text-base font-medium",
                  location.pathname === item.route
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-4 items-center mt-10 md:mb-3">
          <Separator className="h-[1px] w-full bg-gray-300 my-4" />
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://github.com/exorcist09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-600"
                >
                  <Github size={28} />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  sideOffset={8}
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm shadow"
                >
                  Creator's GitHub
                  <Tooltip.Arrow className="fill-gray-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://linkedin.com/in/adarsh-verma-exorcist09"
                  target="top"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-600"
                >
                  <Linkedin size={28} />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  sideOffset={8}
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm shadow"
                >
                  Creator's LinkedIn
                  <Tooltip.Arrow className="fill-gray-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
