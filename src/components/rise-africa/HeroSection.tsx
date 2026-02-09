import AppearOnScroll from "@/components/AppearOnScroll";
import heroImage from "@/assets/rise-africa-hero.jpg";

const HeroSection = () => (
  <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="African students collaborating in a modern tech workspace"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsla(220,20%,8%,0.85)] via-[hsla(220,20%,8%,0.6)] to-[hsla(220,20%,8%,0.3)]" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full px-6 md:px-[calc(18vw-10rem)] py-20">
      <div className="max-w-[138rem] mx-auto">
        <div className="max-w-[72rem]">
          <AppearOnScroll delay={0}>
            <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-6">
              Rise Africa Initiative
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={100}>
            <h1 className="text-[3.6rem] md:text-[5rem] lg:text-[6.4rem] font-bold tracking-[-0.02em] leading-[1.1] text-white mb-8">
              Rise Africa — Empowering Africa's Next Generation of Global Tech Talent
            </h1>
          </AppearOnScroll>
          <AppearOnScroll delay={200}>
            <p className="text-[2rem] md:text-[2.2rem] leading-[1.6] text-[hsla(0,0%,100%,0.8)] mb-12 max-w-[56rem]">
              Bridging African education with real-world global opportunities.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quick-connect"
                className="inline-flex items-center justify-center h-[5.6rem] px-10 text-[1.8rem] font-semibold rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Partner With Rise Africa
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center h-[5.6rem] px-10 text-[1.8rem] font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </AppearOnScroll>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
