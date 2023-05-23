import { forwardRef } from "react";
import styles from "./Hnpot.module.css";

type HnypotProps = {
  type?: "text" | "tel" | "email" | "url";
  id: string;
  label: string;
  className?: string;
};

const Hnypot = forwardRef<Ref, HnypotProps>(
  (
    {
      // Component props
      type = "text",
      id = "hny_id",
      label = "Label text",
    },
    ref
  ) => {
    // Component logic
    return (
      // Component Markup
      <>
        <label htmlFor={id} className={styles.hnyinput}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={label}
          className={styles.hnyinput}
        />
      </>
    );
  }
);

export type Ref = HTMLInputElement;

Hnypot.displayName = "Hnypot";

export default Hnypot;
