"use client";

import {
  AlertCircle,
  FileText,
  BarChart3,
  Download,
  FileBarChart2,
  RewindIcon,
  FastForwardIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { AnalysisConfig } from "../types/analysis.js";

interface AnalysisProgressProps {
  progress: number;
  config: AnalysisConfig;
}

export function AnalysisProgress({ progress, config }: AnalysisProgressProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6 w-full">
      <Card className="w-full">
        <CardContent className="p-6 w-full">
          {/* Header Navigation */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b pb-4 gap-4">
            <h1 className="text-xl font-semibold">Static Analysis</h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
              <button className="flex items-center gap-2 text-blue-500">
                <AlertCircle className="h-4 w-4" />
                <span>Detailed Status</span>
              </button>
              <button className="flex items-center gap-2 text-blue-500">
                <FileText className="h-4 w-4" />
                <span>Live Log Viewer</span>
              </button>
              <button className="flex items-center gap-2 text-blue-500">
                <BarChart3 className="h-4 w-4" />
                <span>Generate Report</span>
              </button>
              <button className="flex items-center gap-2 text-blue-500">
                <Download className="h-4 w-4" />
                <span>Export Findings</span>
              </button>
              <button className="flex items-center gap-2 text-blue-500">
                <FileBarChart2 className="h-4 w-4" />
                <span>Summary</span>
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-blue-50 rounded-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <h2 className="text-lg font-medium">
                Static analysis in Progress
              </h2>
              <div className="flex gap-4">
                <Button
                  variant="destructive"
                  className="rounded-full flex items-center gap-2"
                >
                  <RewindIcon className="h-4 w-4" />
                  Abort Analysis
                </Button>
                <Button className="bg-blue-500 rounded-full flex items-center gap-2">
                  <FastForwardIcon className="h-4 w-4" />
                  Resume Analysis
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="h-40 w-full md:w-72 lg:w-96 object-contain border-2 rounded-lg bg-white flex items-center justify-center text-gray-500">
                image
              </div>
              <div className="w-full flex flex-col">
                <div className="flex justify-end">
                  <span className="text-sm text-blue-500">{progress}%</span>
                </div>
                <Progress
                  value={progress}
                  className="h-4 border-blue-500 mt-2 transition-all duration-1000 ease-in bg-gray-200"
                  indicatorColor="bg-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Allowed Permissions */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Allowed Permission</h3>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-600">
              {config.verifyHashes && (
                <span>• Verify file and code hashes</span>
              )}
              {config.codeDuplication && <span>• Code Duplication</span>}
              {config.cyclomaticComplexity && (
                <span>• Cyclomatic Complexity</span>
              )}
              {config.securityStandards && (
                <span>• Matches Security Standards of OWASP and CVE</span>
              )}
            </div>
          </div>

          {/* Live Log View */}
          <div>
            <h3 className="font-medium mb-4">Live Log View</h3>
            <div className="bg-blue-50 p-4 rounded-lg space-y-2 font-mono text-sm overflow-x-auto">
              <p className="whitespace-nowrap">
                2024- 08- 26 12:45:49, 657.5305- 16598 /? D/ Downloader 2: New
                Request, running queue :
              </p>
              <p className="text-blue-500 break-all">
                https://dl.google.com/mac-server/ng/uploads/ccs-ui-428-stan/ngx/A6235/5a7b/5d654/7e0e/59jk64dcmcb7
              </p>
              <p className="whitespace-nowrap">
                2024- 08- 26 12:45:49, 657.5305- 16598 /? D/ Downloader 2: New
                Request, running queue :
              </p>
              <p className="text-blue-500 break-all">
                https://dl.google.com/mac-server/ng/uploads/ccs-ui-428-stan/ngx/A6235/5a7b/5d654/7e0e/59jk64dcmcb7
              </p>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="flex justify-end mt-8">
            <Button className="bg-blue-500 rounded-full">
              Proceed to Dynamic Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
