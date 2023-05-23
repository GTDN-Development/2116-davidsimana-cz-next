import clsx from "clsx";

type PreHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  color?: "muted" | "rich" | "primary" | "inherit" | "white" | "black";
  hasMarginBottom?: boolean;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  base: "block font-semibold font-sans uppercase text-lg",
  color: {
    inherit: "",
    rich: "text-gray-900",
    muted: "text-gray-500",
    primary: "text-primary",
    white: "text-white",
    black: "text-gray-900",
  },
  marginBottom: "mb-[0.65em]",
};

export default function PreHeading({
  level = 2,
  color = "muted",
  hasMarginBottom = true,
  className = "",
  children,
  ...rest
}: PreHeadingProps) {
  // Resolve the correct HTML AsElement
  let AsElement = `h${level}` as keyof JSX.IntrinsicElements;
  if (level === "none") AsElement = "span";
  return (
    <AsElement
      className={clsx(
        componentVariants.base,
        componentVariants.color[color],
        hasMarginBottom && componentVariants.marginBottom,
        className
      )}
      {...rest}
    >
      {children}
    </AsElement>
  );
}
