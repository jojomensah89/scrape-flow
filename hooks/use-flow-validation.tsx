import { useContext } from "react";

import { FlowValidationContext } from "@/context/flowValidationContext";

export default function useFlowValidation() {
  const context = useContext(FlowValidationContext);
  if (!context) {
    throw new Error(
      "useFlowValidation must be used within a FlowValidationContext"
    );
  }
  return context;
}
