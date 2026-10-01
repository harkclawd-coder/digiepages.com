import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  arrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex h-12 shrink-0 items-center gap-3 whitespace-nowrap rounded-full pl-6 pr-2 text-[15px] font-medium transition-[transform,background-color,border-color,box-shadow] duration-300 ease-glide active:scale-[0.97]";

const variants = {
  primary:
    "bg-accent text-on-accent shadow-[0_10px_30px_-12px_var(--accent)] hover:bg-accent-strong",
  ghost: "border border-line bg-surface text-ink hover:border-ink",
};

const iconWrap = {
  primary: "bg-on-accent/15",
  ghost: "bg-ink/[0.07]",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {arrow && (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ease-glide group-hover:translate-x-0.5 group-hover:-translate-y-px ${iconWrap[variant]}`}
        >
          <ArrowRight size={16} weight="bold" />
        </span>
      )}
    </Link>
  );
}
