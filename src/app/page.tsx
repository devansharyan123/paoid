import { FileUpload } from "./pages/file-upload"
import { AnalysisProgress } from "./pages/analysis-progress"
import { CompletionView } from "./pages/completion-view"
import { ConfigurationForm } from "./pages/configuration-form"

export default function Page() {
  return (
    <div className="bg-background">
      <main className="container">
        <FileUpload />
      </main>
    </div>
  )
}

