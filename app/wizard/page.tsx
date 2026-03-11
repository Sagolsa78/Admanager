'use client';

import { useWizardStore } from "@/lib/store/wizardStore";
import Step1 from "@/components/wizard/Step1";
import Step2 from "@/components/wizard/Step2";
import Step3 from "@/components/wizard/Step3";
import Step4 from "@/components/wizard/Step4";
import Step5 from "@/components/wizard/Step5";
import Step6 from "@/components/wizard/Step6";
import Step7 from "@/components/wizard/Step7";
import StepBar from "@/components/wizard/StepBar";
import Navbar from "@/components/layout/Navbar";

export default function WizardPage() {
  const { currentStep } = useWizardStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      case 5: return <Step5 />;
      case 6: return <Step6 />;
      case 7: return <Step7 />;
      default: return <Step1 />;
    }
  };

  return (
    <main className="min-h-screen bg-bg">
      <StepBar currentStep={currentStep} />
      <div className="pt-12 pb-24">
        {renderStep()}
      </div>
    </main>
  );
}
