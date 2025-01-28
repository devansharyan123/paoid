export interface AnalysisConfig {
    verifyHashes: boolean
    codeDuplication: boolean
    cyclomaticComplexity: boolean
    securityStandards: boolean
    saveConfig: boolean
    selectedFile: File | null
}

