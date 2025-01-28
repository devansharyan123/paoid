"use client";

import { FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import type { AnalysisConfig } from "../types/analysis.ts";

interface ConfigurationFormProps {
  config: AnalysisConfig;
  onConfigChange: (config: AnalysisConfig) => void;
  onStartAnalysis: () => void;
}

export function ConfigurationForm({
  config,
  onConfigChange,
  onStartAnalysis,
}: ConfigurationFormProps) {
  return (
    <div className="h-fit w-screen bg-gray-50 p-6">
      <Card className="mx-auto">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Static Analysis</h1>
            <p className="text-sm text-blue-500">
              Configure how you want to check this patch
            </p>
          </div>

          {/* Allow Permission Section */}
          <div className="space-y-4">
            <h2 className="text-base font-medium">Allow Permission</h2>
            <div className="flex items-center justify-between">
              <span className="text-sm">Verify file and code hashes</span>
              <Switch
                checked={config.verifyHashes}
                onCheckedChange={(checked) =>
                  onConfigChange({ ...config, verifyHashes: checked })
                }
              />
            </div>
          </div>

          {/* File Selection Area */}
          <div className="border border-dashed border-gray-300 rounded-lg p-4">
            <label className="w-full flex items-center gap-2 text-blue-500 hover:text-blue-600 justify-center cursor-pointer">
              <FileIcon className="h-5 w-5" />
              <span>
                {config.selectedFile
                  ? config.selectedFile.name
                  : "Select Golden Image of patch paoip-123.eesh.patch"}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onConfigChange({ ...config, selectedFile: file });
                  }
                }}
              />
            </label>
          </div>

          {/* Toggle Switches */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Code Duplication</span>
              <Switch
                checked={config.codeDuplication}
                onCheckedChange={(checked) =>
                  onConfigChange({ ...config, codeDuplication: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Cyclomatic Complexity</span>
              <Switch
                checked={config.cyclomaticComplexity}
                onCheckedChange={(checked) =>
                  onConfigChange({ ...config, cyclomaticComplexity: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">
                Matches Security Standards of OWASP and CVE
              </span>
              <Switch
                checked={config.securityStandards}
                onCheckedChange={(checked) =>
                  onConfigChange({ ...config, securityStandards: checked })
                }
              />
            </div>
          </div>

          {/* Save Configuration Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="save-config"
              className="text-blue-500"
              checked={config.saveConfig}
              onCheckedChange={(checked) =>
                onConfigChange({ ...config, saveConfig: checked === true })
              }
            />
            <label
              htmlFor="save-config"
              className="text-sm text-blue-500 cursor-pointer"
            >
              Save Configuration for future analysis
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Start Analysis Button */}
      <div className="mt-4 w-full flex justify-end">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
          onClick={onStartAnalysis}
        >
          Start Analysis
        </Button>
      </div>
    </div>
  );
}
