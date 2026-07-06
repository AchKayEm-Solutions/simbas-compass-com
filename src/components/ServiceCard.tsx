import { type Service } from "@/data/services";
import { Compass } from "./Compass";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col rounded-4xl border border-forest/10 bg-cream-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-caramel/40 hover:shadow-lift">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage-dark transition-colors duration-300 group-hover:bg-caramel/15 group-hover:text-caramel-dark">
        <Compass className="h-7 w-7" />
      </div>

      <h3 className="text-xl">{service.title}</h3>
      <p className="prose-warm mt-2.5 flex-1 text-[15px]">{service.description}</p>

      <dl className="mt-5 space-y-3 border-t border-forest/10 pt-5 text-sm">
        <div>
          <dt className="font-semibold text-forest">Best for</dt>
          <dd className="mt-0.5 text-charcoal-light">{service.bestFor}</dd>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-caramel"
            aria-hidden="true"
          />
          <dt className="sr-only">Pricing and availability</dt>
          <dd className="font-medium uppercase tracking-wide text-caramel-dark">
            {service.status}
          </dd>
        </div>
      </dl>
    </article>
  );
}
