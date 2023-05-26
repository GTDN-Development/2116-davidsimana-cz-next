import CloseButton from "@/components/CloseButton";
import clsx from "clsx";
import { useState } from "react";

import {
  HiCheckCircle,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiInformationCircle,
} from "react-icons/hi2";

// Popis komponentu:
// - Slouží k zobrazení feedbacku na nějakou akci uživatele (např. odeslání formuláře)

// Použití komponentu:
//
// import Alert from "@/components/ui/Alert";
//
// <Alert intent="success" title="Úspěšně odesláno" hasIcon isDismissable>
//   Váš formulář byl úspěšně odeslán.
// </Alert>
//

type AlertProps = {
  children?: React.ReactNode;
  title?: string | null;
  intent?: "success" | "warning" | "error" | "info";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  hasIcon?: boolean;
  isDismissable?: boolean;
  onDismiss?: () => void;
  isVisible?: boolean;
  className?: string;
  [x: string]: any;
};

const componentVariants = {
  root: "flex w-full items-start justify-between gap-5 py-4 px-5",
  intent: {
    success: "bg-emerald-600 text-emerald-50",
    error: "bg-red-600 text-red-50",
    warning: "bg-amber-600 text-amber-50",
    info: "bg-blue-600 text-blue-50",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  },
};

export default function Alert({
  children,
  title,
  intent = "success",
  hasIcon = true,
  isDismissable = true,
  onDismiss,
  isVisible = true,
  className = "",
  radius = "2xl",
  ...rest
}: AlertProps) {
  // Resolve icon based on status prop
  const Icons = {
    success: HiCheckCircle,
    warning: HiExclamationCircle,
    error: HiExclamationTriangle,
    info: HiInformationCircle,
  };

  const IconComponent = Icons[intent];

  // State
  const [isShown, setIsShown] = useState(isVisible);

  function hideAlert() {
    setIsShown(false);
    onDismiss && onDismiss();
  }

  // Destroy component if close button is clicked
  if (!isShown) {
    return null;
  }

  // Render
  return (
    <div
      className={clsx(
        componentVariants.intent[intent],
        componentVariants.radius[radius]
      )}
    >
      <div className={clsx(componentVariants.root, className)} {...rest}>
        <div className="mr-auto flex flex-row items-start justify-start gap-3 xl:gap-5">
          {hasIcon && (
            <div className="hidden min-[374px]:block sm:pt-0.5">
              <IconComponent
                aria-hidden="true"
                className="h-5 w-5 sm:h-7 sm:w-7"
              />
            </div>
          )}
          <div>
            {title && (
              <div className="mb-3 text-lg font-semibold leading-tight sm:text-xl">
                {title}
              </div>
            )}
            {children && <div>{children}</div>}
          </div>
        </div>
        {isDismissable && <CloseButton size="sm" onClick={hideAlert} />}
      </div>
    </div>
  );
}
