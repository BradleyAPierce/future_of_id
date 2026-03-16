import Link from "next/link";
import { modules } from "@/data/modules";

export default function Dashboard() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Future of Instructional Design
      </h1>

      <p className="mb-8 text-gray-600">
        A guided experience exploring the seven capabilities shaping the next
        generation of instructional design.
      </p>

      <div className="space-y-4">
        {modules
          .sort((a, b) => a.order - b.order)
          .map((module) => (
            <Link
              key={module.slug}
              href={
                module.slug === "orientation"
                  ? "/course/orientation"
                  : `/course/module/${module.slug}`
              }
              className="block border rounded-lg p-5 hover:bg-gray-50 transition">
              <h2 className="text-xl font-semibold">{module.title}</h2>

              <p className="text-gray-500 mt-1">{module.description}</p>

              <p className="text-sm text-gray-400 mt-2">
                Estimated time: {module.estimatedTime}
              </p>
            </Link>
          ))}
      </div>
    </main>
  );
}
