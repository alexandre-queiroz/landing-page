"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";

export function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/3 top-1/2 -z-10 h-[50rem] w-[50rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#E11F48" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
        <h1 className="font-heading text-4xl md:text-6xl lg: text:text7xl">
          The next DEV <br /> Full-stack
          <span className="text-primary"> Next.js 14</span>
        </h1>
        <br />
        <p className="max-w-[42rem] leading-normal text-muted-foreground">
          Next.js é um framework de desenvolvimento web construído sobre Node.js
          que permite aos desenvolvedores criar aplicações web de maneira
          eficiente e otimizada. Desenvolvido pela Vercel, Next.js ganhou
          popularidade na comunidade de desenvolvimento devido à sua abordagem
          híbrida para a renderização de páginas, oferecendo tanto a
          renderização do lado do servidor quanto a renderização estática.
        </p>
        <div className="space-x-4">
          <a
            href="#investiment"
            className="bg-primary py-2 px-4 text-md text-white rounded shadow-lg"
            onClick={() => {
              track("enrollment", { location: "intro" });
            }}
          >
            Quero fazer parte!
          </a>
          <a
            href="#feature"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded bg-transparent",
              })
            )}
            onClick={() => {
              track("features");
            }}
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
