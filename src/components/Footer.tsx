export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Pedro Vidal Portfolio. Built with React &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
