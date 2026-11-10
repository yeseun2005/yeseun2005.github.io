import { profile } from '../data/profile';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const contacts = profile.info.filter((item) => item.href);

  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading bigText="Contact" title="Contact Me" />
        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">{item.label}</p>
              <p className="mt-3 break-all text-sm text-gray-700">{item.value}</p>
            </a>
          ))}
        </div>
        <p className="mt-20 text-center text-xs text-gray-400">© 2026 {profile.name}. Built with React 19 · TypeScript · Tailwind CSS v4</p>
      </div>
    </section>
  );
}