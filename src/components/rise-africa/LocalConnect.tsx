import AppearOnScroll from "@/components/AppearOnScroll";
import emmanuelImage from "@/assets/rise-africa-emmanuel.jpg";

const LocalConnect = () => (
  <section className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)]">
    <div className="max-w-[138rem] mx-auto">
      <AppearOnScroll delay={0}>
        <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4 text-center">
          Regional Leadership
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={100}>
        <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-[-0.01em] leading-[1.2] text-center mb-16">
          Regional Leadership &amp; On-Ground Support
        </h2>
      </AppearOnScroll>

      <AppearOnScroll delay={200}>
        <div className="max-w-[64rem] mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl border border-border bg-card p-8 md:p-12">
          <img
            src={emmanuelImage}
            alt="Emmanuel Okoro Kalu — Regional Partner"
            className="w-32 h-32 md:w-44 md:h-44 rounded-2xl object-cover shrink-0"
            loading="lazy"
          />
          <div>
            <h3 className="text-[2.2rem] font-bold mb-1">Emmanuel Okoro Kalu</h3>
            <p className="text-[1.6rem] text-accent font-medium mb-4">
              Regional Partner &amp; Lead Coordinator — West &amp; Central Africa
            </p>
            <p className="text-[1.6rem] text-muted-foreground leading-[1.7]">
              Education-focused leader bridging African universities with global, industry-aligned upskilling through EMS.
              Emmanuel works directly with academic institutions across Nigeria and West Africa to bring
              transformative programs to campuses.
            </p>
          </div>
        </div>
      </AppearOnScroll>
    </div>
  </section>
);

export default LocalConnect;
