import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoCard } from "@/components/PhotoCard";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { Compass } from "@/components/Compass";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Training Philosophy",
  description:
    "The Simba's Compass approach: patient, practical training that builds confidence, clear communication, and a stronger relationship between dogs and their people.",
  openGraph: {
    title: "Training Philosophy | Simba's Compass",
    description:
      "Patient, practical, relationship-based dog training that meets dogs where they are — without shame or pressure.",
  },
};

const principles = [
  {
    title: "Patient and practical",
    body: "Real training happens in real life. The focus is on simple, doable steps that fit your daily routine — not drills that only work in a quiet room.",
  },
  {
    title: "Clear communication",
    body: "Dogs thrive on consistency. A big part of the work is helping you send signals your dog can actually understand, so everyone's on the same page.",
  },
  {
    title: "Building confidence",
    body: "Many challenges ease when a dog feels more secure. Sessions aim to grow confidence gently, giving your dog room to succeed at their own pace.",
  },
  {
    title: "A stronger relationship",
    body: "The bond between you and your dog is the real foundation. Training is a way to deepen that relationship, not replace it with obedience for its own sake.",
  },
  {
    title: "Meeting dogs where they are",
    body: "Every dog arrives with their own history, temperament, and pace. Plans start from who your dog is today — not who they 'should' be.",
  },
  {
    title: "No shame — for anyone",
    body: "Owners are never made to feel judged. This is a supportive, encouraging space where questions are welcome and progress is celebrated.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Philosophy"
        title="How we approach training"
        description="A calm, thoughtful way of working that puts your dog's wellbeing — and your confidence as an owner — at the center."
      />

      {/* Lead statement + photo */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The short version"
              title="Kind, clear, and grounded in trust"
              description="Training should feel supportive, not stressful. The aim is steady progress you can actually maintain — and a dog who feels safe learning with you."
            />
            <p className="prose-warm mt-6">
              Drawing on years of animal-care experience, the approach stays
              gentle and observant: watching how your dog responds, adjusting as
              you go, and building on small wins. It&apos;s about direction and
              guidance — helping your team find its way, one step at a time.
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
        description="If a patient, relationship-first style feels right for you and your dog, let's talk. Contact details are coming soon."
      />
    </>
  );
}
