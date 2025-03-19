import { Card } from "@thirdbracket/bracketui";
import Image from "next/image";

export function FeatureOne() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      {/* Header Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Title group with flex layout on large screens */}
        <div className="mx-auto mb-8 md:mb-12 lg:mb-16 xl:max-w-6xl lg:max-w-6xl md:max-w-3xl max-w-lg sm:max-w-xl lg:flex lg:items-center lg:justify-between lg:gap-6">
          <h2 className="mb-4 md:mb-6 text-3xl lg:text-4xl font-extrabold text-primary-950 dark:text-white lg:mb-0 text-center lg:text-right  px-4  lg:px-0">
            Think Your Business Can't Afford a Professional&nbsp;Start?
          </h2>
          <p className="text-primary-950/60 dark:text-primary-200/60 font-light text-base md:text-lg lg:text-xl text-center lg:text-left px-4 lg:px-0">
            We bring enterprise-level web development and digital marketing
            solutions within your budget, so you never feel left behind.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          {/* Top row - Two cards with images */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card
              size="lg"
              href="/solutions"
              className="w-full h-full dark:!border-primary-800/70 dark:hover:!border-primary-700" // Added full width and height
              cover={
                <div className="relative  h-52 w-full lg:h-80">
                  <Image
                    src="/website.svg"
                    alt="Enterprise Solutions"
                    fill
                    className="object-cover "
                  />
                </div>
              }
              header="First Impressions Matter"
            >
              <span className="font-light text-primary-950/60 dark:text-primary-200/60">
                Your Website Is Your Business’s First Impression. Make your
                first impression count with a custom website—without the
                “custom” price.
              </span>
            </Card>

            <Card
              size="lg"
              href="/services"
              className="w-full h-full dark:!border-primary-800/70 dark:hover:!border-primary-700" // Added full width and height
              cover={
                <div className="relative  h-52 w-full lg:h-80">
                  <Image
                    src="/ui.svg"
                    alt="Professional Teams"
                    fill
                    className="object-cover "
                  />
                </div>
              }
              header="The Perfect UI is Never Free!"
            >
              <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
                Presenting Bracket UI: A minimal, geometric, pixel-perfect
                component library. Open-source and ready for React & Next.js
                projects.
              </span>
            </Card>
          </div>

          {/* Bottom row - Three cards without images */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              size="lg"
              className="w-full h-full dark:!border-primary-800/70 dark:hover:!border-primary-700" // Added full width and height
              header="Missing Modern Features?"
              href="/solutions"
            >
              <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
                Now, experience essential features like image optimization, edge
                performance, accelerated rendering, cloud functions, and more
                without raising your budget.
              </span>
            </Card>

            <Card
              size="lg"
              className="w-full h-full dark:!border-primary-800/70 dark:hover:!border-primary-700" // Added full width and height
              header="Tired of Searching for Marketers?"
              href="/solutions"
            >
              <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
                Get the Whole Team. Our integrated team of marketers,developers,
                and designers delivers real results that drive your business
                forward.
              </span>
            </Card>

            <Card
              size="lg"
              className="w-full h-full dark:!border-primary-800/70 dark:hover:!border-primary-700" // Added full width and height
              header="SEO Takes Too Long!"
              href="/solutions"
            >
              <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
                SEO can be slow and unpredictable. Our AI-driven strategies and
                marketplace expertise accelerate rankings and improve visibility
                faster.
              </span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
