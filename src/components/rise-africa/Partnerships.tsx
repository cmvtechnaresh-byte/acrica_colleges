import AppearOnScroll from "@/components/AppearOnScroll";
import universityImage from "@/assets/rise-africa-university.jpg";
import { Handshake, Award, BarChart3, GraduationCap } from "lucide-react";

const items = [
  { icon: Handshake, text: "University partnerships" },
  { icon: Award, text: "Value-added certifications" },
  { icon: BarChart3, text: "Pilot programs with measurable outcomes" },
  { icon: GraduationCap, text: "Optional scholarships for deserving students" },
];

const Partnerships = () => (
  <section className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)] bg-muted">
    <div className="max-w-[138rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <AppearOnScroll delay={0}>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={universityImage}
              alt="University campus with students"
              className="w-full h-auto object-cover aspect-[4/3] rounded-2xl"
              loading="lazy"
            />
          </div>
        </AppearOnScroll>

        {/* Content */}
        <div>
          <AppearOnScroll delay={100}>
            <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Partnerships
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <h2 className="text-[3rem] md:text-[3.6rem] font-bold tracking-[-0.01em] leading-[1.2] mb-10">
              Universities &amp; Partnerships
            </h2>
          </AppearOnScroll>

          <div className="space-y-5">
            {items.map((item, i) => (
              <AppearOnScroll key={item.text} delay={200 + i * 80}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-[1.8rem] font-medium">{item.text}</p>
                </div>
              </AppearOnScroll>
            ))}
          </div>

          <AppearOnScroll delay={600}>
            <div className="mt-10">
              <a
                href="#quick-connect"
                className="inline-flex items-center justify-center h-[5.2rem] px-10 text-[1.7rem] font-semibold rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Discuss University Partnership
              </a>
            </div>
          </AppearOnScroll>
        </div>
      </div>
    </div>
  </section>
);

export default Partnerships;
