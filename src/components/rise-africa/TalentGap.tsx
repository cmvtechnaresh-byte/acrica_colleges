import AppearOnScroll from "@/components/AppearOnScroll";
import { Sparkles, Lock } from "lucide-react";

const TalentGap = () => (
  <section className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)]">
    <div className="max-w-[138rem] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left — Talent Potential */}
        <AppearOnScroll delay={0}>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[hsl(145,60%,40%)] to-[hsl(170,50%,35%)] p-10 md:p-14 flex flex-col justify-end min-h-[32rem]">
            <Sparkles className="w-12 h-12 text-white/80 mb-6" />
            <h3 className="text-[2.6rem] md:text-[3rem] font-bold text-white leading-[1.2] mb-3">
              Africa's Talent Potential
            </h3>
            <p className="text-[1.8rem] text-white/80 leading-[1.6]">
              Millions of ambitious, driven young people ready to learn, build, and compete on the global stage.
            </p>
          </div>
        </AppearOnScroll>

        {/* Right — Limited Access */}
        <AppearOnScroll delay={150}>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[hsl(0,50%,45%)] to-[hsl(20,60%,40%)] p-10 md:p-14 flex flex-col justify-end min-h-[32rem]">
            <Lock className="w-12 h-12 text-white/80 mb-6" />
            <h3 className="text-[2.6rem] md:text-[3rem] font-bold text-white leading-[1.2] mb-3">
              Limited Industry Access
            </h3>
            <p className="text-[1.8rem] text-white/80 leading-[1.6]">
              Outdated curricula, few mentors, and lack of exposure to real-world industry challenges.
            </p>
          </div>
        </AppearOnScroll>
      </div>

      {/* Bridge text */}
      <AppearOnScroll delay={300}>
        <div className="mt-12 text-center">
          <p className="text-[2rem] md:text-[2.4rem] font-semibold">
            <span className="text-accent">Rise Africa</span> bridges this gap through EMS.
          </p>
        </div>
      </AppearOnScroll>
    </div>
  </section>
);

export default TalentGap;
