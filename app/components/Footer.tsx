export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono tracking-wider">
        <div>© {year} AYO MOTION · Built with code.</div>
        <div className="flex items-center gap-4">
          <span>Built with Next.js, Tailwind, Remotion.</span>
        </div>
      </div>
    </footer>
  );
}
