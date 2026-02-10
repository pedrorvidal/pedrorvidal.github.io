import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ImgAvatar from '@/assets/images/vidal-lisan-al-gaib.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile image */}
          <div className="shrink-0 animate-fade-up">
            <Avatar className="w-36 h-36 md:w-48 md:h-48 ring-4 ring-primary/30 shadow-2xl shadow-primary/10">
              <AvatarImage src={ImgAvatar} alt="Profile photo" />
              <AvatarFallback className="text-4xl font-bold bg-secondary text-foreground">
                PV
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Text content */}
          <div
            className="text-center md:text-left space-y-5 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <div>
              <p className="text-sm font-mono text-primary mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="text-gradient">Pedro Vidal</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground mt-2">
                Full-Stack Developer
              </p>
            </div>

            <p className="text-muted-foreground max-w-lg leading-relaxed">
              I build modern web applications with clean code and pixel-perfect
              design. BSc in Computer Science, 15+ years of experience crafting
              products that people love to use.
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
              {/* <Button asChild variant="ghost" size="lg" className="gap-2"> */}
              {/*   <a href="#" download> */}
              {/*     <Download size={16} /> Download CV */}
              {/*   </a> */}
              {/* </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
