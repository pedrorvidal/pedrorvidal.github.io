import { useEffect, useState } from 'react';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/useLanguage';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedrorvidal/?locale=en' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/pedrorvidal' },
  { icon: Mail, label: 'Email', href: 'mailto:pedrorvidal@gmail.com' },
];

const fieldClass = 'h-12 text-base bg-background border-2 focus-visible:ring-neon-cyan focus-visible:border-neon-cyan';
const labelClass = 'font-arcade text-[0.625rem] uppercase text-neon-cyan';

export default function Contact() {
  const { ref, inView } = useInView();
  const { toast } = useToast();
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [sending, setSending] = useState(false);
  const [oneUp, setOneUp] = useState(0);
  const [countdown, setCountdown] = useState(9);
  const staticFormsApiKey = import.meta.env.VITE_STATICFORMS_API_KEY;

  // Classic "CONTINUE? 9…0" countdown, looping while the section is on screen.
  useEffect(() => {
    if (!inView || reduced) return;
    const id = setInterval(() => setCountdown((n) => (n === 0 ? 9 : n - 1)), 1000);
    return () => clearInterval(id);
  }, [inView, reduced]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!staticFormsApiKey) {
      toast({ title: t.contact.missingTitle, description: t.contact.missingBody, duration: 30000 });
      return;
    }
    setSending(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('apiKey', staticFormsApiKey);
    formData.append('subject', 'Portfolio Contact Form');

    try {
      const response = await fetch('https://api.staticforms.dev/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      toast({ title: t.contact.sentTitle, description: t.contact.sentBody, duration: 30000 });
      setOneUp((n) => n + 1);
      form.reset();
    } catch (error) {
      toast({ title: t.contact.failTitle, description: t.contact.failBody, duration: 30000 });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="container" ref={ref}>
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.contact.kicker}</p>
          <h2 id="contact-title" className="font-arcade text-xl sm:text-2xl md:text-3xl uppercase text-neon-yellow text-glow">
            {t.contact.title}{' '}
            <span aria-hidden="true" className="inline-block w-[1.2em] text-neon-magenta tabular-nums">
              {countdown}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="reveal max-w-2xl mx-auto space-y-8" data-inview={inView}>
          <form
            onSubmit={handleSubmit}
            className="relative space-y-5 pixel-card rounded-2xl border-2 border-neon-yellow/40 p-6 sm:p-8"
          >
            <input aria-hidden="true" className="hidden" name="honeypot" tabIndex={-1} autoComplete="off" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className={labelClass}>
                  {t.contact.name}
                </Label>
                <Input id="name" name="name" autoComplete="name" placeholder={t.contact.namePh} required className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className={labelClass}>
                  {t.contact.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t.contact.emailPh}
                  required
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className={labelClass}>
                {t.contact.message}
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.contact.messagePh}
                rows={5}
                required
                className="text-base bg-background border-2 focus-visible:ring-neon-cyan focus-visible:border-neon-cyan"
              />
            </div>
            <div className="relative pt-2 text-center">
              <button
                type="submit"
                disabled={sending}
                className="pixel-btn w-full sm:w-auto bg-neon-magenta text-white disabled:opacity-60"
              >
                <Send size={14} aria-hidden="true" /> {sending ? t.contact.sending : t.contact.send}
              </button>
              {oneUp > 0 && (
                <span
                  key={oneUp}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 font-arcade text-sm text-neon-green animate-pop-up"
                >
                  1UP
                </span>
              )}
            </div>
          </form>

          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded border-2 border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-neon-cyan hover:text-neon-cyan"
              >
                <s.icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
