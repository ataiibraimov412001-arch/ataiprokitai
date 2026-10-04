import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-24 text-center md:px-8 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          Перевод · Бизнес-сопровождение · Китай
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Профессиональный перевод и бизнес-сопровождение в Китае
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Последовательный перевод, переговоры, инспекция фабрик и организация
          деловых поездок для международных клиентов. Работаем на китайском,
          русском и английском языках.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Оставить заявку
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Наши услуги
          </a>
        </div>
      </div>
    </section>
  );
}
