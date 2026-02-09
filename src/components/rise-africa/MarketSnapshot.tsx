import AppearOnScroll from "@/components/AppearOnScroll";
import { Users, Wifi, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Young, Fast-Growing Talent",
    desc: "Africa's median age is 19 — the world's youngest, most dynamic workforce.",
  },
  {
    icon: Wifi,
    title: "Rapid Digital Adoption",
    desc: "Internet and mobile penetration are accelerating across the continent.",
  },
  {
    icon: Briefcase,
    title: "High Demand for Tech Skills",
    desc: "Global companies are actively seeking job-ready African tech talent.",
  },
  {
    icon: GraduationCap,
    title: "Education-Industry Gap",
    desc: "Academic curricula often lag behind what the industry actually needs.",
  },
];

const MarketSnapshot = () => (
  <section className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)] bg-muted">
    <div className="max-w-[138rem] mx-auto">
      <AppearOnScroll delay={0}>
        <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4 text-center">
          The Opportunity
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={100}>
        <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-[-0.01em] leading-[1.2] text-center mb-16">
          Africa at a Digital Turning Point
        </h2>
      </AppearOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, i) => (
          <AppearOnScroll key={item.title} delay={i * 100}>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-[1.8rem] font-semibold mb-3">{item.title}</h3>
              <p className="text-[1.6rem] text-muted-foreground leading-[1.6]">{item.desc}</p>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default MarketSnapshot;
