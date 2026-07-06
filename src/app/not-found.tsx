import { Button } from "@/components/Button";
import { Compass } from "@/components/Compass";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Compass className="h-20 w-20 text-caramel" spin />
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-caramel-dark">
        404 — Off the trail
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl">This path leads nowhere</h1>
      <p className="prose-warm mt-4 max-w-md">
        The page you&apos;re looking for wandered off. Let&apos;s get you back on
        course.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          View services
        </Button>
      </div>
    </section>
  );
}
