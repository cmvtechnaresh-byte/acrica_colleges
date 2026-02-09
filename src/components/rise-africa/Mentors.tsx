import AppearOnScroll from "@/components/AppearOnScroll";


const mentors = [
  {
    name: "Raj Mehta",
    role: "Senior Cloud Architect",
    company: "Global SaaS Company",
    image: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=",
  },
  {
    name: "Amara Chen",
    role: "Product Manager",
    company: "Fortune 500 Tech",
    image: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
  {
    name: "Sofia Rivera",
    role: "Data Science Lead",
    company: "AI Research Lab",
    image: "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
  },
  {
    name: "Priya Nair",
    role: "Engineering Manager",
    company: "Global Service Company",
    image: "https://t4.ftcdn.net/jpg/05/03/43/79/360_F_503437947_qJfYUufslSxdQR6uMuLgdDSjZGCKyn3B.jpg",
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, i) => (
          <AppearOnScroll key={mentor.name} delay={i * 100}>
            <div className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src={mentor.image}
                  alt={`${mentor.name} - ${mentor.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-[1.6rem] font-semibold">{mentor.name}</h3>
                <p className="text-[1.4rem] text-accent font-medium">{mentor.role}</p>
                <p className="text-[1.3rem] text-muted-foreground">{mentor.company}</p>
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default Mentors;
