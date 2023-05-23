import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from "react";
import React, { forwardRef } from "react";

type Props = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const SmartLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  ({ href, className = "", children, as, ...props }, ref) => {
    // If `as` prop is provided, render the specified element
    if (as) {
      const AsElement = as;
      return (
        <AsElement className={className} ref={ref} {...props}>
          {children}
        </AsElement>
      );
    }

    // If href is not provided, render a button
    if (!href) {
      return (
        <button
          className={className}
          ref={ref as Ref<HTMLButtonElement>}
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      );
    }

    // External links (http, https, ftp), render with target="_blank" and rel="noopener noreferrer"
    if (href.match(/^(http|https|ftp):/)) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref as Ref<HTMLAnchorElement>}
          {...props}
        >
          {children}
        </a>
      );
    }

    // Internal anchor links, email links, telephone links, file download links, or custom protocols
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("blob:") ||
      href.startsWith("data:") ||
      props.download ||
      href.match(/^[a-zA-Z0-9-]+:/) // Custom protocols
    ) {
      return (
        <a
          href={href}
          className={className}
          ref={ref as Ref<HTMLAnchorElement>}
          {...props}
        >
          {children}
        </a>
      );
    }

    // In all other cases, render a Next Link component
    return (
      <Link
        href={href}
        ref={ref as Ref<HTMLAnchorElement>}
        {...props}
        className={className}
      >
        {children}
      </Link>
    );
  }
);

SmartLink.displayName = "SmartLink";
export default SmartLink;
