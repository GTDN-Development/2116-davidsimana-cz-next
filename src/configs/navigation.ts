import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

export const routes = [
  {
    href: "/#domu",
    label: "Domů",
  },
  {
    href: "/#sluzby",
    label: "Služby",
  },
  {
    href: "/#jak-fungujeme",
    label: "Jak fungujeme",
  },
  {
    href: "/#finance",
    label: "O financích",
  },
  {
    href: "/#kontakt",
    label: "Kontakt",
  },
];

export const contact = [
  {
    href: "tel:+420773997434",
    label: "+420 773 997 434",
  },
  {
    href: "mailto:info@drive4people.cz",
    label: "info@drive4people.cz",
  },
];

export const socials = [
  {
    href: "https://www.instagram.com/drive4people",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/drive4people",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.linkedin.com/company/drive4people",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.youtube.com/@davidsimanapfp",
    label: "Youtube",
    icon: FaYoutube,
    classNames: "bg-red-600",
  },
  {
    href: "https://open.spotify.com/show/1jt4nG4mSAxPPoR5nYkEBN",
    label: "Spotify",
    icon: FaSpotify,
    classNames: "bg-emerald-600",
  },
];
