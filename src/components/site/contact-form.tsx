"use client";

import { useState } from "react";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

const SERVICE_TYPES = [
  "Последовательный перевод",
  "Перевод на трёх языках",
  "ВЭД и логистика",
  "Технический перевод",
  "Инспекция фабрик",
  "Организация бизнес-поездки",
  "Другое",
];

const CONTACTS = [
  { icon: Mail, label: "Email", value: "info@ataiprokitai.com" },
  { icon: Phone, label: "Телефон", value: "+86 ..." },
  { icon: MessageCircle, label: "WhatsApp / WeChat", value: "... " },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(SERVICE_TYPES[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = `Имя: ${name}\nКонтакт: ${contact}\nУслуга: ${service}\n\n${message}`;
    const mailto = `mailto:info@ataiprokitai.com?subject=${encodeURIComponent(
      "Заявка с сайта ATAIproKITAI"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-muted">
            Имя
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted">
            Email или телефон
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Как с вами связаться"
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm text-muted">
          Услуга
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          >
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-muted">
          Сообщение
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Опишите вашу задачу"
            className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          <Send className="h-4 w-4" />
          Отправить заявку
        </button>

        {sent && (
          <p className="text-sm text-accent">
            Заявка сформирована — отправьте письмо из открывшегося окна, и мы
            свяжемся с вами.
          </p>
        )}
      </form>

      <div className="flex flex-col gap-4">
        {CONTACTS.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-4 rounded-2xl border border-border p-5"
          >
            <c.icon className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm text-muted">{c.label}</p>
              <p className="font-medium">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
