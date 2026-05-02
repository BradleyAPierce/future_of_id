import Link from "next/link";
import Card from "@/components/ui/Card";

const linkedinUrl = "https://www.linkedin.com/in/bradley-pierce-649a3435/";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-5 py-10 text-[var(--text)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="rounded-3xl border border-[var(--primary)] bg-[var(--surface-elevated)] p-8 shadow-md lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-2xl font-semibold text-[var(--primary)]">
              BP
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
                About the creator
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
                Bradley Pierce
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
                I design learning experiences that help people make better
                decisions, not just consume content.
              </p>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
                This platform is a working example of how I approach
                instructional design.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <Card className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              What I do
            </h2>
            <p className="leading-relaxed text-[var(--muted)]">
              I build learning experiences that are grounded in real work.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              Instead of focusing only on content delivery, I design systems
              where people practice decisions, evaluate tradeoffs, and apply
              judgment in situations that actually reflect their day-to-day work.
            </p>
            <div>
              <p className="font-medium text-[var(--text)]">My focus includes:</p>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>• scenario-based learning</li>
                <li>• AI-supported feedback systems</li>
                <li>• performance consulting</li>
                <li>• scalable content and learning design</li>
              </ul>
            </div>
          </Card>

          <Card className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              How I think
            </h2>
            <p className="leading-relaxed text-[var(--muted)]">
              Good learning design starts with the performance problem, not the
              deliverable.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              Most courses are built around content. I focus on how people make
              decisions, where they struggle, and what actually changes behavior.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              The strongest solutions combine judgment, evidence, systems
              thinking, and respect for the learner’s context.
            </p>
          </Card>
        </section>

        <Card className="space-y-4 border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface-elevated))] p-6">
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            Why I built this
          </h2>
          <p className="max-w-3xl leading-relaxed text-[var(--muted)]">
            I built this platform because most learning about AI stays
            theoretical.
          </p>
          <p className="max-w-3xl leading-relaxed text-[var(--muted)]">
            You can read about it, watch it, or hear people talk about it, but
            that doesn’t mean you can actually use it in your work.
          </p>
          <p className="max-w-3xl leading-relaxed text-[var(--muted)]">
            This experience is different.
          </p>
          <p className="max-w-3xl leading-relaxed text-[var(--muted)]">
            Instead of explaining AI, it gives instructional designers a place to
            practice using it in real design decisions, where tradeoffs,
            constraints, and judgment matter.
          </p>
        </Card>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Card className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              Background
            </h2>
            <p className="leading-relaxed text-[var(--muted)]">
              My work sits at the intersection of instructional design,
              learning technology, and performance improvement.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              I’ve spent most of my time building learning experiences for real
              business environments, where clarity, usability, and impact matter
              more than theory alone.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              I’m especially interested in practical systems that help teams move
              faster without lowering quality.
            </p>
          </Card>

          <Card className="space-y-5 border-[var(--primary)] p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              Let’s connect
            </h2>
            <p className="leading-relaxed text-[var(--muted)]">
              If this project connects with the kind of learning systems you're
              trying to build, I’d be glad to connect.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[var(--primary)] px-5 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-[var(--primary-hover)] hover:shadow-md">
                Visit LinkedIn
              </Link>
              <Link
                href="/course/dashboard"
                className="rounded-lg border border-[var(--border)] px-5 py-3 text-center font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)]">
                Explore the course
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
