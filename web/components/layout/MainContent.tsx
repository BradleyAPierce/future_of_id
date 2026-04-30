export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-w-0 flex-1 px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-5xl">{children}</div>
    </main>
  );
}
