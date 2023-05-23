import { forwardRef, useState } from "react";

type CheckboxProps = {
  id: string;
  name: string;
  label: React.ReactNode | string;
  hasHiddenLabel?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isDefaultChecked?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "form-checkbox h-5 w-5 cursor-pointer outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-4 focus-visible:ring-offset-0",
  isDisabled: "cursor-not-allowed opacity-60",
  isInvalid: "!border-error-active",
  variant: {
    filled: "bg-gray-200 border-2 border-gray-200",
    outlined: "bg-transparent border-2 border-gray-200",
  },
  color: {
    primary: "checked:text-primary focus-visible:ring-primary-active/70",
    secondary: "checked:text-secondary focus-visible:ring-secondary-active/70",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
};

const Checkbox = forwardRef<Ref, CheckboxProps>(
  (
    {
      // Component props
      id = "checkbox_id",
      name = "checkbox_name",
      label = "this is a checkbox label",
      hasHiddenLabel = false,
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      isDefaultChecked = false,
      variant = "filled",
      color = "primary",
      radius = "md",
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    const [isChecked, setIsChecked] = useState<boolean | undefined>(
      isDefaultChecked
    );
    return (
      // Component Markup
      <div className={`flex items-center gap-3 ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          required={isRequired}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...rest}
          className={` 
          ${cvs.base}
          ${cvs.variant[variant]} 
          ${cvs.color[color]} 
          ${cvs.radius[radius]} 
          ${isDisabled ? cvs.isDisabled : ""}
          ${isInvalid ? cvs.isInvalid : ""}
          `}
        />
        <label
          htmlFor={id}
          className={`text-copy 
          ${hasHiddenLabel ? "sr-only cursor-auto" : ""}
          ${!hasHiddenLabel && isDisabled ? "cursor-auto" : "cursor-pointer"}
          `}
        >
          {isRequired && <span className="mr-1 text-red-500">*</span>}
          <span>{label}</span>
        </label>
      </div>
    );
  }
);

export type Ref = HTMLInputElement;

Checkbox.displayName = "Checkbox";

export default Checkbox;
