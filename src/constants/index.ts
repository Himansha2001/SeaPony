import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero", isExternal: false },
  { label: "ABOUT US", href: "/about-us", isExternal: true },
  { label: "About", href: "#about", isExternal: false },
  { label: "Nexus", href: "#nexus", isExternal: false },
  { label: "Story", href: "#story", isExternal: false },
  { label: "Contact", href: "#contact", isExternal: false },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;
