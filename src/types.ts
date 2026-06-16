export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  agentActive?: "Qualification" | "Product-Matching" | "Compliance/Guardrail" | "e-KYC Onboarding";
}

export interface ExtractedProfile {
  fullName: string;
  profession: string;
  incomeBand: string;
  financialGoal: string;
  riskAppetite: string;
}

export interface ComplianceScan {
  isSafe: boolean;
  flaggedKeywords: string[];
  flaggedReason: string;
}

export interface MatchedProduct {
  productName: string;
  matchCategory: string;
  matchJustification: string;
}

export interface SarathiResponse {
  responseText: string;
  extractedData: ExtractedProfile;
  complianceScan: ComplianceScan;
  leadScore: number;
  matchingProducts: MatchedProduct[];
  nextAction: "ask_income" | "ask_goal" | "start_ekyc" | "rm_handoff" | "continue_chat" | string;
}

export interface CRMLead {
  id: string;
  fullName: string;
  profession: string;
  incomeBand: string;
  financialGoal: string;
  riskAppetite: string;
  leadScore: number;
  matchedProducts: string[];
  complianceStatus: "CLEARED" | "FLAGGED" | "PENDING";
  currentStep: string;
  lastUpdated: string;
  remarks?: string;
  conversationHistory: { role: string; content: string }[];
}
