<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Sarathi AI — Agentic Customer Acquisition & Onboarding Concierge for SBI

Developed by **Ganesh Krishna Reddy** for the SBI Hackathon.

**GitHub Repository:** [SBIHackathonGFF2026](https://github.com/ganeshkrishnareddy/SBIHackathonGFF2026)  
**Developer Profiles:** [LinkedIn](https://www.linkedin.com/in/pganeshkrishnareddy/) | [GitHub Profile](https://github.com/ganeshkrishnareddy)

---

## How It Was Developed

Sarathi AI was engineered as a high-fidelity intelligent portal designed to streamline State Bank of India's retail customer acquisition and onboarding process. 

### Architecture & Key Modules:
1. **Multi-Agent Orchestrator (Qualification Agent)**: Parses incoming customer requests in real-time, extracts customer profiles, computes dynamic suitability parameters, and scores leads.
2. **Product Matching Engine**: Evaluates state-of-the-art State Bank of India products (Savings, Mutual Funds, Home Loans, etc.) against customer parameters using low-latency Gemini LLM queries.
3. **Real-time Session Safety & Guardrails (Compliance Agent)**: Monitors conversation inputs continuously to perform real-time security scans, detect prompt injections, block compliance violations, and ensure safe client-advisor exchanges.
4. **Vite + React + TypeScript Dashboard**: A beautifully designed, high-performance web interface built with pure vanilla Tailwind-like utilities, responsive interactive views, real-time live log traces, and secure simulated e-KYC (Aadhaar & OTP verification).

### Key Technologies:
- **Frontend Framework**: React with TypeScript and Vite
- **AI Core**: Gemini API (with seamless client-side fallbacks for hosting deployment)
- **Deployment**: Firebase Hosting (`sarathi-sbi.web.app`)
- **Styling**: Tailwind CSS & Lucide Icons

---

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure your Environment:**
   Create a `.env` file in the root directory and add:
   ```env
   VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```