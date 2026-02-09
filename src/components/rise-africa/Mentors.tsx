import AppearOnScroll from "@/components/AppearOnScroll";
import vikasImage from "@/assets/malmo/vikas-sharma.png";
import akshatImage from "@/assets/malmo/akshat-gupta.png";
import kunikaImage from "@/assets/malmo/kunika-malhotra.png";
import { Linkedin } from "lucide-react";

const mentors = [
  {
    name: "Vikas Sharma",
    role: "Software Engineering",
    company: "Microsoft",
    image: vikasImage,
    linkedin: "#",
  },
  {
    name: "Akshat Gupta",
    role: "Software Engineering",
    company: "PhonePe",
    image: akshatImage,
    linkedin: "#",
  },
  {
    name: "Kunika Malhotra",
    role: "Software Engineering",
    company: "Amazon",
    image: kunikaImage,
    linkedin: "#",
  },
];

const Mentors = () => (
  <section className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)] bg-muted">
    <div className="max-w-[138rem] mx-auto">
      <AppearOnScroll delay={0}>
        <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4 text-center">
          Mentors
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={100}>
        <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-[-0.01em] leading-[1.2] text-center mb-6">
          Learn from Industry Practitioners
        </h2>
      </AppearOnScroll>
      <AppearOnScroll delay={150}>
        <p className="text-[1.8rem] text-muted-foreground text-center mb-16 max-w-[60rem] mx-auto">
          Mentors actively working in the global tech ecosystem.
        </p>
      </AppearOnScroll>

      <div className="flex flex-wrap justify-center gap-8">
        {mentors.map((mentor, i) => (
          <AppearOnScroll key={mentor.name} delay={i * 100} className="w-full max-w-[320px]">
            <div className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={mentor.image}
                  alt={`${mentor.name} - ${mentor.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

              </div>
              <div className="p-6 flex-1 text-left flex flex-col items-start">
                <h3 className="text-[1.8rem] font-semibold mb-1">{mentor.name}</h3>
                <p className="text-[1.4rem] text-accent font-medium mb-1">{mentor.role}</p>
                <p className="text-[1.3rem] text-muted-foreground mb-4">{mentor.company}</p>

                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[1.4rem] font-medium text-primary hover:text-accent transition-colors mt-auto"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);


export default Mentors;
