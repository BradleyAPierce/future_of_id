export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-w-0 flex-1 px-5 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-6xl">{children}</div>
    </main>
  );
}
