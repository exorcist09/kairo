import React from "react";
import { Separator } from "@/components/ui/separator";
import avatar from "@/assets/1.jpg"
import {
  Github,
  Youtube,
  Instagram,
  Clock,
  FileText,
  NotebookText,
  Code,
  Folders,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const accounts = [
  { name: "Google Drive", icon: <Folders />, linked: false },
  { name: "Notion", icon: <NotebookText />, linked: false },
  { name: "Clock", icon: <Clock />, linked: false },
  { name: "Editor", icon: <FileText />, linked: false },
  { name: "VS Code", icon: <Code />, linked: false },
  { name: "GitHub", icon: <Github />, linked: false },
  { name: "YouTube", icon: <Youtube />, linked: false },
  { name: "Instagram", icon: <Instagram />, linked: false },
];

const Profile = () => {
  return (
    <div className="h-screen flex flex-col relative px-4">
      {/* Top Header */}
      <div className="sticky top-0 bg-gray-50 z-10 px-2 py-4 pt-4 flex justify-between items-center border-b border-gray-300">
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-800">
          Profile
        </h1>
      </div>

      {/* Content Container */}
      <div className="bg-white p-6 w-full max-w-5xl mx-auto mt-8">
        {/* Avatar and Info Form */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-18 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-blue-600 z-0"
          />
        </div>

        <div className="space-y-6 mx-auto w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
              Name
            </label>
            <input
              type="text"
              defaultValue="Adarsh Verma"
              className="w-full px-4 py-2 sm:px-5 sm:py-3 border rounded-md text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email (disabled) */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
              Email
            </label>
            <input
              type="email"
              value="adarsh.verma@gmail.com"
              disabled
              className="w-full px-4 py-2 sm:px-5 sm:py-3 border rounded-md bg-gray-100 text-gray-500 text-base sm:text-lg cursor-not-allowed"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
              Country
            </label>
            <input
              type="text"
              defaultValue="India"
              className="w-full px-4 py-2 sm:px-5 sm:py-3 border rounded-md text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex items-end justify-end">
            <Button className="bg-blue-600 hover:bg-blue-800 px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg">
              Save
            </Button>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-10" />

        {/* Linked Accounts */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Linked Accounts
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {accounts.map((account, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center border-2 border-gray-600/50 rounded-lg p-4 sm:p-6 w-36 sm:w-48 h-44 sm:h-48 text-center shadow-sm transition-all"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl mb-3 text-blue-600">
                  {account.icon}
                </div>
                <span className="text-base sm:text-lg font-semibold mb-4">
                  {account.name}
                </span>

                {/* Link Input only if not linked */}
                {!account.linked && (
                  <div className="flex flex-col items-center w-full">
                    <input
                      type="url"
                      placeholder="Paste link"
                      className="text-sm sm:text-base rounded-md border w-full px-2 py-1 sm:px-3 sm:py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-800 px-4 py-1 sm:px-5 sm:py-2 text-sm sm:text-base w-full">
                      Link
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
