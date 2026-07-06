import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoCard } from "@/components/PhotoCard";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { Compass } from "@/components/Compass";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Training Philosophy",
  description:
    "The Simba's Compass approach: balanced training catered to the dog in front of us — clear communication, structure, and confidence, tailored to each individual dog.",
  openGraph: {
    title: "Training Philosophy | Simba's Compass",
    description:
      "Balanced dog training, tailored to the dog in front of us. No two dogs are the same, so no two plans are either.",
  },
};

const principles = [
  {
    title: "Balanced and individual",
    body: "No single method fits every dog. We draw on a full, fair toolkit and build the plan around the dog in front of us — because no two dogs are the same.",
  },
  {
    title: "Clear communication and structure",
    body: "Dogs thrive when they know what's expected. Consistent, understandable communication and steady structure help everyone stay on the same page.",
  },
  {
    title: "Fair and humane",
    body: "Clear boundaries and meaningful rewards, always with your dog's wellbeing first. Firm when it helps, gentle where it counts — never harsh for its own sake.",
  },
  {
    title: "Building confidence",
    body: "Many challenges ease when a dog feels more secure. Sessions give your dog room to succeed and grow steadier at their own pace.",
  },
  {
    title: "Meeting dogs where they are",
    body: "Every dog arrives with their own history, temperament, and pace. Plans start from who your dog is today — not who they 'should' be.",
  },
  {
    title: "No shame — for owners",
    body: "You're never made to feel judged. This is a supportive space where questions are welcome and progress is celebrated.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Philosophy"
        title="Balanced training, built around the dog in front of us"
        description="No dog is the same, and no training method should be either. The approach is tailored to each individual dog — practical, fair, and grounded in real animal-care experience."
      />

      {/* Lead statement + photo */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The short version"
              title="One dog at a time"
              description="Savannah trains with a balanced approach, using the full range of fair, humane tools and matching them to the dog in front of her."
            />
            <p className="prose-warm mt-6">
              Drawing on six years of animal-care experience, the work stays
              observant and adaptable: reading how your dog responds, adjusting
              as you go, and building steady progress with clear structure and
              meaningful rewards. It&apos;s about direction and guidance —
              helping your team find its way, one step at a time.
            </p>
          </div>
          <Reveal from="right">
            <PhotoCard
              image={images.trainingSession}
              shape="blob"
              sizes="(min-width:1024px) 45vw, 90vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* Principles grid */}
      <Section tone="white">
        <SectionHeading
          align="center"
          eyebrow="What guides the work"
          title="Six principles behind every session"
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col rounded-4xl bg-cream-50 p-7 shadow-card ring-1 ring-forest/5 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage/15 text-sage-dark">
                  <Compass className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg">{p.title}</h3>
                <p className="prose-warm mt-2 text-[15px]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Honest boundaries */}
      <Section tone="sage">
        <Reveal className="mx-auto max-w-3xl rounded-4xl bg-cream-50 p-8 shadow-card ring-1 ring-forest/5 sm:p-10">
          <h2 className="text-2xl">A note on honesty</h2>
          <div className="prose-warm mt-4 space-y-4">
            <p>
              Good training is a partnership, and results depend on many things —
              your dog, your consistency, and your unique situation. For that
              reason, Simba&apos;s Compass doesn&apos;t promise guaranteed
              outcomes or quick fixes.
            </p>
            <p>
              This work also isn&apos;t a substitute for veterinary or
              behavioral medicine. If a dog&apos;s needs point toward medical or
              specialized behavioral care, the honest, caring thing to do is to
              say so — and to help you find the right support.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Does this approach sound like your kind of thing?"
        description={`If a balanced, individual style feels right for you and your dog, Savannah would love to help. Booking runs through ${site.partner.name}.`}
      />
    </>
  );
}
