type ContentCardProps = {
  title: string;
  children: React.ReactNode;
};

export function ContentCard({ title, children }: ContentCardProps) {
  return (
    <div className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
      <h2 className="font-display text-xl font-medium text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-prose">{children}</div>
    </div>
  );
}
