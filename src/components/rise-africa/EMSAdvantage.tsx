import AppearOnScroll from "@/components/AppearOnScroll";
import { BookOpen, Wrench, UserCheck, Target, Globe } from "lucide-react";

const advantages = [
  { icon: BookOpen, title: "Industry-Aligned Curriculum", desc: "Courses designed with input from practicing engineers and product leaders." },
  { icon: Wrench, title: "Real-World Problem Solvers", desc: "Direct access to professionals solving problems at scale every day." },
  { icon: UserCheck, title: "One-on-One Mentorship", desc: "Personal guidance from mentors working in top global companies." },
  { icon: Target, title: "Interview & Career Readiness", desc: "Mock interviews, resume reviews, and portfolio building." },
  { icon: Globe, title: "Global Standards, Local Relevance", desc: "International quality adapted for Africa's unique context and needs." },
];

const EMSAdvantage = () => (
  <section className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)] bg-muted">
    <div className="max-w-[138rem] mx-auto">
      <AppearOnScroll delay={0}>
        <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4 text-center">
          Why EMS
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={100}>
        <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-[-0.01em] leading-[1.2] text-center mb-16">
          The EMS Advantage
        </h2>
      </AppearOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((item, i) => (
          <AppearOnScroll key={item.title} delay={i * 80}>
            <div className="flex gap-5 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-[1.8rem] font-semibold mb-2">{item.title}</h3>
                <p className="text-[1.6rem] text-muted-foreground leading-[1.6]">{item.desc}</p>
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default EMSAdvantage;
