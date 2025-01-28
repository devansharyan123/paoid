"use client";
import { FileIcon, InfoIcon, Upload } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
  
import Link from "next/link";

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col items-center justify-center max-w-full mx-auto p-8 gap-8">
      {!file && (
        <Image
          src="/file-upload-icon.jpeg"
          alt="Upload illustration"
          width={400}
          height={300}
          className="mb-4"
        />
      )}

      {!file && (
        <input
          type="file"
          className="hidden"
          id="file-upload"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              console.log(file.name);
              setFile(file);
            }
          }}
        />
      )}
      <label htmlFor="file-upload" className="w-full">
        {file ? (
          <div className="space-y-8 w-full">
            {/* File Display */}
            <div className="border border-dashed border-blue-400 rounded-lg p-6 flex items-center justify-center gap-3 mx-auto max-w-2xl">
              <FileIcon className="h-6 w-6 text-blue-500" />
              <span className="text-blue-500 text-lg">{file.name}</span>
            </div>

            {/* Patch Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold">Patch Information</h2>
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patch Name</TableHead>
                    <TableHead>Patch Version</TableHead>
                    <TableHead>Patch Source</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-blue-500">
                      paoip-123.eesh.patch
                    </TableCell>
                    <TableCell className="text-blue-500">
                      0.16.7.2.tar.bz2
                    </TableCell>
                    <TableCell className="text-blue-500">
                      Np1-i your-patch-file.patch
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <span className="cursor-pointer w-full border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <p className="text-muted-foreground">Drag or Upload Patch File</p>
          </span>
        )}
      </label>

      <div className="flex w-full gap-4 justify-end">
        <Link href={"/analysis/dynamic-analysis"}>
          <Button variant="destructive" disabled={!file} className="rounded-3xl">
            Dynamic Analysis
          </Button>
        </Link>
        <Link  href={"/analysis/static-analysis"}>
          <Button disabled={!file} className="rounded-3xl bg-blue-500">Static Analysis</Button>
        </Link>
      </div>
    </div>
  );
}
