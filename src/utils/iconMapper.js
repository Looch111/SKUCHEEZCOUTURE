import {
  Scissors,
  ShieldCheck,
  Globe,
} from "lucide-react";

const ICON_MAP = {
  scissors: Scissors,
  "shield-check": ShieldCheck,
  globe: Globe,
};

export default function IconWrapper({ iconName, size = 28 }) {
  const Icon = ICON_MAP[iconName];
  if (!Icon) return null;
  return <Icon size={size} />;
}
