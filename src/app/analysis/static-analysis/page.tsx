"use client"

import { useEffect, useState } from "react"
import { ConfigurationForm } from "../../components/configuration-form"
import { AnalysisProgress } from "../../components/analysis-progress"
import { CompletionView } from "../../components/completion-view"
import type { AnalysisConfig } from "../../types/analysis.ts"
import { INITIAL_CONFIG } from "../../constants/analysis"

export default function StaticAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [patchingComplete, setPatchingComplete] = useState(false)
  const [progress, setProgress] = useState(0)
  const [config, setConfig] = useState<AnalysisConfig>(INITIAL_CONFIG)

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setPatchingComplete(true)
            return 100
          }
          return prev + 1
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isAnalyzing])

  const handleStartAnalysis = () => {
    setIsAnalyzing(true)
    console.log("Starting analysis with config:", config)
  }

  if (patchingComplete) {
    return <CompletionView />
  }

  if (isAnalyzing) {
    return <AnalysisProgress progress={progress} config={config} />
  }

  return <ConfigurationForm config={config} onConfigChange={setConfig} onStartAnalysis={handleStartAnalysis} />
}

