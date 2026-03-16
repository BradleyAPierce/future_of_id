import Link from "next/link";

interface ModuleCardProps {
  slug: string;
  title: string;
  description: string;
  estimatedTime: string;
}

export default function ModuleCard({
  slug,
  title,
  description,
  estimatedTime,
}: ModuleCardProps) {
  const href =
    slug === "orientation" ? "/course/orientation" : `/course/module/${slug}`;

  return (
    <Link
      href={href}
      className="block border rounded-lg p-5 hover:bg-gray-50 hover:text-black transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400 mt-1">{description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Estimated time: {estimatedTime}
      </p>
    </Link>
  );
}
