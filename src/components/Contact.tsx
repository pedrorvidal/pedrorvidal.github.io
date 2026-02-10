import { useState } from 'react';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/hooks/use-toast';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedrorvidal/?locale=en',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const staticFormsApiKey = import.meta.env.VITE_STATICFORMS_API_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!staticFormsApiKey) {
      toast({
        title: 'Missing form configuration',
        description:
          'Set VITE_STATICFORMS_API_KEY in your environment to enable submissions.',
        duration: 30000,
      });
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

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 30000,
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Message failed',
        description: 'Something went wrong. Please try again in a moment.',
        duration: 30000,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Have a project in mind or just want to chat? Drop me a message!
          </p>
        </div>

        <div
          className="max-w-lg mx-auto space-y-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              aria-hidden="true"
              className="hidden"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2"
              disabled={sending}
            >
              <Send size={16} /> {sending ? 'Sending…' : 'Send Message'}
            </Button>
          </form>

          <div className="flex justify-center gap-4 pt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
