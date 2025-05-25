import React from "react";
import { TrendingDownIcon, TrendingUpIcon, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.jpeg"

const data = [
  { name: "Job 1", manual: 15, automated: 5 },
  { name: "Job 2", manual: 10, automated: 3 },
  { name: "Job 3", manual: 20, automated: 8 },
  { name: "Job 4", manual: 18, automated: 6 },
];

const DashBoard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
    navigate("/login");
  };

  const getUserName = () => {
    const token = localStorage.getItem("token");
    if (!token) return "Guest";
    const decoded = jwtDecode(token);
    console.log(decoded); // dekho kya aa raha hai token se
    return decoded.name || "User";

    // try {
    //   const decoded = jwtDecode(token);
    //   return decoded.name || "User";
    // } catch (error) {
    //   console.error("Token decode error", err);
    //   return "User";
    // }
  };

  return (
    <div className="min-h-screen flex flex-col relative px-4 overflow-auto">
      <div className="sticky top-0 bg-blue-500/5 w-full z-10 px-2 py-4 pt-4 flex justify-between items-center border-b border-gray-300 mb-6">
        <h1 className="font-bold text-3xl text-gray-800">Your Dashboard</h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
        <Card className="w-full sm:w-[320px] flex-shrink-0">
          <CardHeader className="relative">
            <CardDescription>Currently Executing Jobs</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              2
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="flex gap-2 font-medium">
              Running smoothly <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">Updated live</div>
          </CardFooter>
        </Card>

        <Card className="w-full sm:w-[320px] flex-shrink-0">
          <CardHeader className="relative">
            <CardDescription>Total Task Executed</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              24
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                <TrendingUpIcon className="size-3" />
                8%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="flex gap-2 font-medium">
              Slight dip <TrendingDownIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">Could have been faster</div>
          </CardFooter>
        </Card>

        {/* Updated Third Card with User Info */}
        <Card className="w-full sm:w-[320px] flex-shrink-0">
          <CardHeader className="relative flex items-center gap-4">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full w-12 h-12 border"
            />
            <div>
              <CardDescription>Logged in as</CardDescription>
              <CardTitle className="text-xl font-semibold">
                {getUserName()}
              </CardTitle>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-center mt-4">
            <Button
              onClick={handleLogout}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Line Chart */}
      <div className="mt-20 px-4 mx-auto w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Time Saved with Automation
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "Time (mins)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="manual"
              stroke="#FF5E5E"
              name="Manual Time"
            />
            <Line
              type="monotone"
              dataKey="automated"
              stroke="blue"
              name="Automated Time"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashBoard;
