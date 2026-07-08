"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 px-6 md:px-12 text-brand-text-sec text-[10px] tracking-widest uppercase">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left trademark info */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="font-cinematic font-extrabold text-xs tracking-[0.25em] text-brand-text hover:text-brand-accent transition-colors duration-300"
          >
            PRASHANT PEERAMAL
          </a>
          <span className="hidden md:inline text-white/5">|</span>
          <p className="text-[9px] text-brand-text-sec/50 font-medium">
            &copy; {currentYear} Prashant Peeramal. All Rights Reserved. Crafted with Purpose.
          </p>
        </div>

        {/* Right Nav Links & Social Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-semibold">
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-text transition-colors duration-300"
          >
            VIMEO
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-text transition-colors duration-300"
          >
            YOUTUBE
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-text transition-colors duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-text transition-colors duration-300"
          >
            LINKEDIN
          </a>
        </div>

      </div>
    </footer>
  );
}
