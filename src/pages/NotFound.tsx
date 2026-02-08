import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(var(--background))]">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">404</p>
        <h1 className="mt-4 text-3xl font-semibold">We can’t find that page.</h1>
        <Button asChild className="mt-6">
          <a href="/">Back to home</a>
        </Button>
      </div>
    </div>
  );
}
