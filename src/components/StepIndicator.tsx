import React, { useEffect } from "react";
import { defineStepper } from "@stepperize/react";

interface StepIndicatorProps {
  currentStep: "service" | "date" | "time" | "details" | "confirmation";
}

const stepperDef = defineStepper(
  { id: "service", title: "Servicio" },
  { id: "date", title: "Fecha" },
  { id: "time", title: "Horario" },
  { id: "details", title: "Datos" },
  { id: "confirmation", title: "Confirmación" }
);

const { steps, useStepper, Scoped } = stepperDef;

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const methods = useStepper();

  // Cada vez que `currentStep` cambia, forzamos ir a ese paso
  useEffect(() => {
    methods.goTo(currentStep);
  }, [currentStep, methods]);

  return (
    <Scoped>
      <div className="max-w-4xl mx-auto mb-8">
        <nav className="flex items-center justify-between">
          {steps.map((step, index) => {
            const currentIndex = steps.findIndex(s => s.id === methods.current.id);
            const isPast = index < currentIndex;
            const isActive = step.id === methods.current.id;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center"
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isPast
                    ? "bg-beige-800 border-beige-800 text-white"
                    : isActive
                      ? "bg-transparent border-beige-800 text-beige-800"
                      : "bg-transparent border-gray-400 text-gray-400"}
                `}>
                  <span>{isPast ? "✔" : index + 1}</span>
                </div>
                <span className={`
                  text-xs mt-2 font-medium transition-colors duration-300
                  ${ (isPast || isActive) ? "text-gray-800" : "text-gray-400"}
                `}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-4 bg-gray-300">
                    {/* Puedes controlar el conector activo según necesidad */}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </Scoped>
  );
};
