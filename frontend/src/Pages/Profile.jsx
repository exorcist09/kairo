import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import avatar from "@/assets/1.jpg";
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
import axios from "axios";

const accounts = [
  {
    name: "Gmail",
    icon: <Folders />,
    linked: false,
    type: "email",
    fields: [
      { label: "Email Address", name: "email", type: "email" },
      { label: "App Password", name: "password", type: "password" },
    ],
  },
  {
    name: "Google Drive",
    icon: <Folders />,
    linked: false,
    type: "drive",
    fields: [{ label: "Access Token", name: "token", type: "text" }],
  },
  // Add more accounts as needed...
  {
    name: "GitHub",
    icon: <Github />,
    linked: false,
    fields: [{ label: "Acoount Id/Link", name: "string", type: "text" }],
  },

  {
    name: "Instagram",
    icon: <Instagram />,
    linked: false,
    fields: [
      { label: "username", name: "string", type: "text" },
      { label: "password", name: "string", type: "password" },
    ],
  },
];

const Profile = () => {
  // State to hold input values for each account's fields
  const [accountData, setAccountData] = useState(accounts.map(() => ({})));

  // State to track linked status for accounts (initially from accounts array)
  const [linkedStatus, setLinkedStatus] = useState(
    accounts.map((acc) => acc.linked)
  );

  const handleFieldChange = (idx, fieldName, value) => {
    const updated = [...accountData];
    updated[idx] = {
      ...updated[idx],
      [fieldName]: value,
    };
    setAccountData(updated);
  };

  const handleLink = async (idx) => {
    const data = accountData[idx];
    const service = accounts[idx].name;

    if (!data || Object.values(data).some((v) => !v)) {
      alert("Please fill all fields before linking.");
      return;
    }

    try {
      // Call your backend API to save linked account data for the user
      await axios.post("/api/auth/link-account", {
        service,
        data,
      });

      // On success, update linked status
      const updatedLinked = [...linkedStatus];
      updatedLinked[idx] = true;
      setLinkedStatus(updatedLinked);

      alert(`${service} linked successfully!`);
    } catch (err) {
      console.error("Link failed:", err);
      alert("Failed to link account, try again.");
    }
  };

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
            src="https://i.pravatar.cc/80?img=12"
            alt="avatar"
            className="rounded-full w-28 h-28"
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
            Link Accounts
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {accounts.map((account, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between border-2 border-gray-600/50 rounded-lg p-4 sm:p-6 w-44 sm:w-48 min-h-[12rem] text-center shadow-sm transition-all"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl mb-3 text-blue-600">
                    {account.icon}
                  </div>
                  <span className="text-base sm:text-lg font-semibold mb-4">
                    {account.name}
                  </span>
                </div>

                {/* Show linked message if linked */}
                {linkedStatus[idx] ? (
                  <div className="text-green-600 font-semibold">Linked</div>
                ) : account.fields ? (
                  <div className="flex flex-col items-center w-full mt-auto">
                    {account.fields.map((field) => (
                      <input
                        key={field.name}
                        type={field.type}
                        placeholder={field.label}
                        className="text-sm sm:text-base rounded-md border w-full px-2 py-1 sm:px-3 sm:py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        value={accountData[idx][field.name] || ""}
                        onChange={(e) =>
                          handleFieldChange(idx, field.name, e.target.value)
                        }
                      />
                    ))}
                    <Button
                      className="bg-blue-600 hover:bg-blue-800 px-4 py-1 sm:px-5 sm:py-2 text-sm sm:text-base w-full"
                      onClick={() => handleLink(idx)}
                    >
                      Link
                    </Button>
                  </div>
                ) : (
                  <div className="text-gray-500 italic mt-auto">
                    No linking available
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
