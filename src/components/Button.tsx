import Loader from "@/components/Loader";
import clsx from "clsx";
import type { UrlObject } from "url";
import SmartLink from "./SmartLink";

// ToDO:
// - Wrap component in forwardRef

// Icon Component for Button
function ButtonIcon({
  children,
  isLoading,
  className,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "z-10 translate-x-0 scale-110 transform-gpu",
        isLoading && "invisible",
        className
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  href?: string | (string & UrlObject);
  as?: React.ElementType;
  children: React.ReactNode;

  intent?: "primary" | "secondary" | "white" | "black";
  size?: "sm" | "md" | "lg" | "xl";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isFullWidth?: boolean;

  isLoading?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;

  onClick?: () => void;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "inline-flex gap-2 items-center justify-center no-underline overflow-hidden cursor-pointer uppercase font-semibold tracking-wider",
  transition: "transition duration-300",
  intent: {
    primary: "bg-primary text-white hover:bg-primary-600",
    secondary: "bg-secondary text-white hover:bg-secondary-600",
    white:
      "text-white bg-transparent ring-white hover:bg-white hover:text-gray-900",
    black:
      "text-gray-900 bg-transparent ring-gray-900 hover:bg-gray-900 hover:text-primary-50",
  },
  size: {
    sm: "py-1 px-2 text-xs leading-5 md:py-1.5 md:px-3",
    md: "py-1.5 px-3 text-xs leading-5 md:py-2.5 md:px-4 md:text-sm md:leading-5",
    lg: "py-2.5 px-4 text-sm leading-5 md:py-3 md:px-5 md:text-base md:leading-6",
    xl: "py-3 px-5 text-base leading-6 md:py-4 md:px-6 md:text-lg md:leading-6",
  },
  radius: "rounded-md",
  isFullWidth: "w-full",
  // Used for disabled and loading states
  isDisabled: "pointer-events-none opacity-50",
};

export default function Button({
  href = "",
  as,
  children,
  intent = "secondary",
  size = "md",
  leftIcon,
  rightIcon,
  isFullWidth = false,
  isLoading = false,
  isDisabled = false,
  isFocusable = true,
  className = "",
  ...props
}: ButtonProps) {
  // Classes of main root component
  const rootClassName = clsx(
    componentVariants.root,
    componentVariants.transition,
    componentVariants.intent[intent],
    componentVariants.size[size],
    componentVariants.radius,
    isFullWidth && componentVariants.isFullWidth,
    (isLoading || isDisabled) && componentVariants.isDisabled,
    className
  );

  return (
    <SmartLink
      as={as}
      href={href}
      aria-hidden={isDisabled || isLoading}
      tabIndex={isDisabled || isLoading || !isFocusable ? -1 : 0}
      className={rootClassName}
      {...props}
    >
      {leftIcon && <ButtonIcon isLoading={isLoading}>{leftIcon}</ButtonIcon>}
      <span className={clsx("z-10", isLoading && "invisible")}>{children}</span>
      {rightIcon && <ButtonIcon isLoading={isLoading}>{rightIcon}</ButtonIcon>}
      {isLoading && (
        <Loader
          size="inherit"
          thickness="inherit"
          color="inherit"
          className="absolute inset-auto z-[1] m-auto translate-x-0 transform-gpu text-[1.4em]"
        />
      )}
    </SmartLink>
  );
}
