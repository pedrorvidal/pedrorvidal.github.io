import { ArrowDown, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ImgAvatar from '@/assets/images/vidal-lisan-al-gaib.png';

const resumeFile = `${import.meta.env.BASE_URL}Pedro-Vidal-Resume.pdf`;

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-16">
      <div className="container py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Profile image */}
          <div className="shrink-0 animate-fade-up">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 ring-4 ring-primary/30 shadow-2xl shadow-primary/10">
              <AvatarImage src={ImgAvatar} alt="Profile photo" />
              <AvatarFallback className="text-5xl font-bold bg-secondary text-foreground">
                PV
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Text content */}
          <div
            className="text-center md:text-left space-y-6 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <div>
              <p className="text-sm font-mono text-primary mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-gradient">Pedro Vidal</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground mt-3">
                Full-Stack PHP Developer
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 mt-1">
                WordPress &amp; Laravel Specialist · 20+ Years of Experience
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              I build and maintain systems and APIs for companies around the
              world — diagnosing performance/SEO issues, responding to
              security incidents, and standardizing maintenance at scale
              using WordPress, Laravel, PHP, React, and related tools across
              multi-country projects.
            </p>

            <p className="flex items-center justify-center md:justify-start gap-1.5 text-base text-muted-foreground/80">
              <MapPin size={16} /> Porto Alegre, RS, Brazil
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild size="lg" className="gap-2">
                <a href="#cases">
                  View Cases <ArrowDown size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <a href={resumeFile} download="Pedro-Vidal-Resume.pdf">
                  <Download size={16} /> Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
