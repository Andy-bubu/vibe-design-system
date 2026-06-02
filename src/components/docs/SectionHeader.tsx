interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-secondary">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-fg-primary sm:text-4xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-fg-secondary sm:text-lg">{description}</p>
    </div>
  );
}
