import AppearOnScroll from "@/components/AppearOnScroll";
import { Code, Languages } from "lucide-react";

const courses = [
  {
    icon: Code,
    title: "IT Upskilling Programs",
    tags: ["Practical", "Industry-Aligned", "Global Employability"],
    desc: "Full-stack development, cloud computing, data science, and more — taught by practitioners.",
  },
  {
    icon: Languages,
    title: "Foreign Language Programs",
    tags: ["Practical", "Industry-Aligned", "Global Employability"],
    desc: "English, German, French, and Japanese for professional and academic advancement.",
  },
];

const Courses = () => (
  <section id="courses" className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)]">
    <div className="max-w-[138rem] mx-auto">
      <AppearOnScroll delay={0}>
        <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4 text-center">
          Programs
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={100}>
        <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-[-0.01em] leading-[1.2] text-center mb-16">
          Courses That Create Careers
        </h2>
      </AppearOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[96rem] mx-auto">
        {courses.map((course, i) => (
          <AppearOnScroll key={course.title} delay={i * 150}>
            <div className="rounded-2xl border border-border bg-card p-10 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <course.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-[2.2rem] font-bold mb-3">{course.title}</h3>
              <p className="text-[1.6rem] text-muted-foreground leading-[1.6] mb-6 flex-1">{course.desc}</p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[1.3rem] px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>

      <AppearOnScroll delay={400}>
        <div className="text-center mt-12">
          <a
            href="#quick-connect"
            className="inline-flex items-center justify-center h-[5rem] px-8 text-[1.6rem] font-semibold rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View All Programs
          </a>
        </div>
      </AppearOnScroll>
    </div>
  </section>
);

export default Courses;
