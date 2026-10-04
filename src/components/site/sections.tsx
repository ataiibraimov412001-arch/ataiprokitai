import {
  Languages,
  Globe2,
  Factory,
  Plane,
  Wrench,
  SearchCheck,
  GraduationCap,
  Award,
  HeartHandshake,
  ShieldCheck,
  Clock,
  Quote,
} from "lucide-react";
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particles-typography";
import { ContactForm } from "@/components/site/contact-form";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-accent">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{children}</h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

export function ParticleShowcase() {
  return (
    <section className="border-y border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Три языка · Один стандарт качества
        </p>
        <div className="mt-4 w-full">
          <CursorDrivenParticleTypography
            text="ПЕРЕВОД"
            fontSize={150}
            particleDensity={5}
            dispersionStrength={22}
            returnSpeed={0.06}
            color="#ffffff"
            className="min-h-[220px] md:min-h-[340px]"
          />
        </div>
        <p className="mt-6 text-center text-lg text-background/70">
          Китайский · Русский · Английский
        </p>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Languages,
    title: "Перевод на трёх языках",
    text: "Свободное владение китайским, русским и английским позволяет вести переговоры на самом высоком уровне, включая специализированный медицинский перевод.",
  },
  {
    icon: Globe2,
    title: "ВЭД и логистика",
    text: "Опыт работы с китайскими производителями и поставщиками: поиск надёжных партнёров и работа без посредников.",
  },
  {
    icon: Wrench,
    title: "Технический перевод",
    text: "Лесопромышленность, технологии, медицина и строительство — точный перевод сложной отраслевой терминологии.",
  },
  {
    icon: Factory,
    title: "Инспекция и аудит фабрик",
    text: "Организация встреч с поставщиками, инспекция товаров и проверка фабрик с контролем на каждом этапе.",
  },
  {
    icon: Plane,
    title: "Организация бизнес-поездок",
    text: "Полное сопровождение деловых поездок: билеты, размещение и встречи с партнёрами.",
  },
  {
    icon: SearchCheck,
    title: "Аудит поставщиков",
    text: "Проверка надёжности китайских контрагентов и контроль качества продукции перед отгрузкой.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Услуги</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Полный спектр услуг для работы с Китаем
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            От перевода и переговоров до инспекции фабрик и организации деловых
            поездок.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
            >
              <service.icon className="h-7 w-7 text-accent" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>О нас</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Команда, живущая и работающая в Китае
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg text-muted-foreground">
            <p>
              Мы работаем в Китае уже более 7 лет и предоставляем услуги
              последовательного перевода и бизнес-сопровождения для
              международных клиентов.
            </p>
            <p>
              Специалисты команды окончили топовые университеты Китая:
              бакалавриат в тройке лучших вузов Пекина и магистратуру в ведущем
              университете Шанхая.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 text-center sm:grid-cols-3">
          {[
            { value: "7+", label: "лет в Китае" },
            { value: "3", label: "языка перевода" },
            { value: "100%", label: "контроль на каждом этапе" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border p-8">
              <p className="text-5xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: GraduationCap,
    title: "Образование мирового уровня",
    text: "Знания подтверждены обучением в лучших университетах Китая.",
  },
  {
    icon: Award,
    title: "Опыт с важными проектами",
    text: "Медицинский перевод и бизнес-переговоры на различных уровнях.",
  },
  {
    icon: HeartHandshake,
    title: "Понимание китайского менталитета",
    text: "Годы работы в Китае дают понимание культурных и деловых особенностей.",
  },
  {
    icon: ShieldCheck,
    title: "Надёжность и конфиденциальность",
    text: "Гарантируем конфиденциальность информации и данных клиента.",
  },
  {
    icon: Clock,
    title: "Скорость и точность",
    text: "Быстро ориентируемся в сложной терминологии и даём точный перевод.",
  },
  {
    icon: SearchCheck,
    title: "Работа без посредников",
    text: "Помогаем находить надёжных партнёров и избегать лишних посредников.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading subtitle="Почему клиенты выбирают нашу команду для работы с Китаем.">
          Преимущества
        </SectionHeading>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-3 rounded-2xl border border-border p-7 transition-colors hover:border-accent/40"
            >
              <reason.icon className="h-7 w-7 text-accent" />
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Команда помогла нам наладить переговоры с китайскими поставщиками и избежать посредников. Контроль на каждом этапе — на высоте.",
    name: "Андрей К.",
    role: "Руководитель отдела закупок, лесопромышленность",
  },
  {
    quote:
      "Точный технический перевод на трёх языках в кратчайшие сроки. Сложная медицинская терминология передана без искажений.",
    name: "Мария В.",
    role: "Медицинский проект",
  },
  {
    quote:
      "Инспекция фабрики и проверка товара перед отгрузкой прошли отлично. Полный отчёт и фотоотчёт по каждому этапу.",
    name: "Дмитрий С.",
    role: "Импортёр, строительная отрасль",
  },
  {
    quote:
      "Организация деловой поездки под ключ: билеты, размещение и встречи. Всё чётко, без задержек.",
    name: "Елена Р.",
    role: "Директор, технологический сектор",
  },
  {
    quote:
      "Глубокое понимание китайского менталитета помогло закрыть сделку, которая тянулась месяцами.",
    name: "Игорь Л.",
    role: "Предприниматель",
  },
  {
    quote:
      "Профессиональный последовательный перевод на выставке и переговорах. Рекомендуем как надёжного партнёра.",
    name: "Ольга Н.",
    role: "Менеджер по ВЭД",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading subtitle="Что говорят клиенты о работе с нами.">
          Отзывы
        </SectionHeading>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-7"
            >
              <Quote className="h-6 w-6 text-accent" />
              <p className="flex-1 text-muted-foreground">{t.quote}</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "С какими языками вы работаете?",
    a: "Мы работаем на трёх языках: китайском, русском и английском. Это позволяет вести переговоры и переводить на высоком уровне.",
  },
  {
    q: "Какие услуги вы предоставляете?",
    a: "Последовательный перевод, технический и бизнес перевод, ВЭД и логистику, инспекцию и аудит фабрик, а также организацию деловых поездок.",
  },
  {
    q: "Работаете ли вы с конкретными отраслями?",
    a: "Да. Мы работаем в лесопромышленности, технологиях, медицине и строительной отрасли, быстро ориентируясь в сложной терминологии.",
  },
  {
    q: "Как проходит инспекция фабрик?",
    a: "Мы организуем встречи с поставщиками, проводим инспекцию товаров и проверку фабрик, предоставляя контроль и отчётность на каждом этапе.",
  },
  {
    q: "Помогаете ли вы с организацией поездок?",
    a: "Да, мы полностью сопровождаем деловые поездки: бронируем билеты, размещение и организуем встречи с партнёрами.",
  },
  {
    q: "Как связаться и оставить заявку?",
    a: "Заполните форму в разделе «Контакты» — мы свяжемся с вами и обсудим задачу.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Ответы на вопросы
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card px-6 py-5 open:border-accent/40"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading subtitle="Оставьте заявку — поможем достичь результата на китайском рынке.">
          Свяжитесь с нами
        </SectionHeading>

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-foreground px-8 py-16 text-center text-background">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Начните работу с китайским рынком
          </h2>
          <p className="max-w-xl text-lg text-background/70">
            Оставьте заявку — мы поможем с переводом, переговорами и поиском
            надёжных партнёров.
          </p>
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О нас" },
    { href: "#why", label: "Преимущества" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <a
              href="#hero"
              className="flex items-baseline gap-0 text-lg font-bold tracking-tight"
            >
              <span>ATAI</span>
              <span className="text-accent">pro</span>
              <span>KITAI</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Профессиональный перевод и бизнес-сопровождение в Китае.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-muted-foreground sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <span>ATAIproKITAI © {new Date().getFullYear()}</span>
          <span>Рус · English · 中文</span>
        </div>
      </div>
    </footer>
  );
}
