import React from "react";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashBoard = () => {
  return (
    <>
      <div className="h-screen flex flex-col relative px-4">
        <div className="sticky top-0 bg-gray-50 z-10 px-2 py-4 pt-4 flex justify-between items-center border-b border-gray-300 mb-6">
          <h1 className="font-bold text-3xl text-gray-800">Your Dashboard</h1>
        </div>

        {/* Responsive container for cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8  px-4">
          <Card className="min-w-[280px] flex-shrink-0">
            <CardHeader className="relative">
              <CardDescription>Currently Executing Jobs</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                12
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +3%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="flex gap-2 font-medium">
                Running smoothly <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">Updated live</div>
            </CardFooter>
          </Card>

          <Card className="min-w-[280px] flex-shrink-0">
            <CardHeader className="relative">
              <CardDescription>Total Task Executed</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                3,452
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingDownIcon className="size-3" />
                  -8%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="flex gap-2 font-medium">
                Slight dip <TrendingDownIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">Needs improvement</div>
            </CardFooter>
          </Card>

          <Card className="min-w-[280px] flex-shrink-0">
            <CardHeader className="relative">
              <CardDescription>No. of Days Active</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                125
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +15%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="flex gap-2 font-medium">
                Steady activity <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Consistent engagement
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
