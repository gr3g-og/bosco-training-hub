import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}

export const SectionEyebrow = ({ children, onDark, className }: SectionEyebrowProps) => (
  <span className={cn("section-eyebrow", onDark && "on-dark", className)}>{children}</span>
);
