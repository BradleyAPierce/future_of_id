import { modules } from "@/data/modules";
import ModuleCard from "@/components/course/ModuleCard";

export default function Dashboard() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Future of Instructional Design
      </h1>

      <p className="mb-8 text-gray-400">
        A guided experience exploring the seven capabilities shaping the next
        generation of instructional design.
      </p>

      <div className="space-y-4">
        {modules
          .sort((a, b) => a.order - b.order)
          .map((module) => (
            <ModuleCard
              key={module.slug}
              slug={module.slug}
              title={module.title}
              description={module.description}
              estimatedTime={module.estimatedTime}
            />
          ))}
      </div>
    </main>
  );
}
