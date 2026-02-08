import { cn } from "../lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-sm font-semibold text-[hsl(var(--foreground))]/80 transition-colors hover:text-[hsl(var(--foreground))]"
      )}
    >
      {label}
    </a>
  );
}
