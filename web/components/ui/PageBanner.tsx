type PageBannerProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  pills?: string[];
};

export default function PageBanner({
  title,
  subtitle,
  imageUrl,
  pills = [],
}: PageBannerProps) {
  return (
    <section className="relative min-h-[320px] overflow-hidden rounded-3xl border border-[var(--border)] shadow-md">
      <img
        src={imageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex min-h-[320px] items-end p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">
          {pills.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md">
                  {pill}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
