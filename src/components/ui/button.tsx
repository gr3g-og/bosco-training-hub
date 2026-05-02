import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-light rounded-sharp uppercase tracking-[0.08em]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sharp",
        outline:
          "border-2 border-border bg-transparent hover:bg-muted hover:text-foreground rounded-sharp",
        "ghost-outline":
          "border-[1.5px] border-white/40 bg-transparent text-white hover:border-white rounded-sharp uppercase tracking-[0.08em]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft hover:shadow-accent rounded-sharp",
        ghost: "hover:bg-muted hover:text-foreground rounded-sharp",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-10 px-6 text-xs",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-12 px-8 text-xs",
        xl: "h-[52px] px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
