import Link from "next/link";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto p-8">
        <header className="mb-10">
          <Link
            href="/course/dashboard"
            className="text-sm text-gray-400 hover:text-white">
            ← Back to Dashboard
          </Link>

          <h1 className="text-3xl font-bold mt-4">
            Future of Instructional Design
          </h1>

          <p className="text-gray-400 mt-2">
            A guided experience exploring the seven capabilities shaping the
            next generation of instructional design.
          </p>
        </header>

        {children}
      </div>
    </main>
  );
}
