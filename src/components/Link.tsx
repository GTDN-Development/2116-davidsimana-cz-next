import clsx from "clsx";
import SmartLink from "./SmartLink";

// <Link> Component
type LinkProps = {
  href: string;
  as?: React.ElementType;
  children: React.ReactNode;

  color?: "inherit" | "primary";
  hoverEffect?:
    | "none"
    | "static"
    | "appear"
    | "disappear"
    | "slide-left"
    | "slide-right"
    | "slide-back"
    | "scale-up"
    | "scale-down";

  className?: string;
  [x: string]: any;
};

const componentVariants = {
  root: "relative group/link h-max max-w-max",
  color: {
    inherit: "",
    primary: "text-primary",
  },
  hoverEffect: {
    none: "",
    static:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full bg-current opacity-0 group-hover/link:opacity-60",
    appear:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center translate-y-[-0.2875em] transform-gpu bg-current opacity-0 transition duration-200 group-hover/link:translate-y-0 group-hover/link:opacity-60",
    disappear:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center translate-y-0 transform-gpu bg-current opacity-60 transition duration-200 group-hover/link:translate-y-[0.125em] group-hover/link:opacity-0",
    "slide-left":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-left scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-right group-hover/link:scale-x-100",
    "slide-right":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-right scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-left group-hover/link:scale-x-100",
    "slide-back":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-left scale-x-100 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-right group-hover/link:scale-x-0 ease-out-circ",
    "scale-up":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:scale-x-100 ease-out-circ",
    "scale-down":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center scale-x-100 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:scale-x-0 ease-out-circ",
  },
};

export default function Link({
  href,
  color = "inherit",
  hoverEffect = "none",
  children,
  className = "",
  as,
  ...props
}: LinkProps) {
  return (
    <SmartLink
      as={as}
      href={href}
      className={clsx(
        hoverEffect !== "none" && componentVariants.root,
        componentVariants.color[color],
        className
      )}
      {...props}
    >
      {hoverEffect !== "none" && (
        <span className={clsx(componentVariants.hoverEffect[hoverEffect])} />
      )}
      {hoverEffect === "slide-back" && (
        <span className="absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-right scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 ease-out-circ group-hover/link:origin-left group-hover/link:scale-x-100 group-hover/link:delay-300" />
      )}
      {children}
    </SmartLink>
  );
}
