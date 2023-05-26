import { socials } from "@/configs/navigation";
import clsx from "clsx";
import Link from "./Link";

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <ul className={clsx("flex gap-5 sm:gap-8", className)}>
      {socials.map((social) => (
        <li key={social.label}>
          <Link href={social.href} aria-label={social.label}>
            <social.icon className="h-5 w-5 transition duration-150 hover:text-secondary sm:h-6 sm:w-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
