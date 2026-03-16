// Course module page (dynamic slug)
export default function Module({ params }: { params: { slug: string } }) {
  return <div>Module: {params.slug}</div>;
}
