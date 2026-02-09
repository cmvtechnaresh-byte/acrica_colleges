import { useState } from "react";
import AppearOnScroll from "@/components/AppearOnScroll";
import { useToast } from "@/hooks/use-toast";

const interestOptions = [
  "University Partnership",
  "Student Programs",
  "Mentorship",
  "Other",
];

const QuickConnect = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    toast({ title: "Request received!", description: "Our regional team will connect with you shortly." });
  };

  const inputClass =
    "w-full text-[1.7rem] leading-[2.4rem] h-[5.6rem] px-4 bg-card border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground";

  if (submitted) {
    return (
      <section id="quick-connect" className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)]">
        <div className="max-w-[64rem] mx-auto text-center">
          <div className="text-[6rem] mb-6">🎉</div>
          <h2 className="text-[3rem] md:text-[3.6rem] font-bold mb-4">Thank You</h2>
          <p className="text-[1.8rem] text-muted-foreground">
            Our regional team will connect with you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="quick-connect" className="w-full py-20 md:py-28 px-6 md:px-[calc(18vw-10rem)]">
      <div className="max-w-[138rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left info */}
          <div className="flex flex-col justify-center">
            <AppearOnScroll delay={0}>
              <p className="text-[1.4rem] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
                Quick Connect
              </p>
            </AppearOnScroll>
            <AppearOnScroll delay={100}>
              <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-[-0.01em] leading-[1.2] mb-6">
                Let's Build Africa's Future Workforce Together
              </h2>
            </AppearOnScroll>
            <AppearOnScroll delay={200}>
              <p className="text-[1.8rem] text-muted-foreground leading-[1.7]">
                Connect with us to explore partnerships, programs, or student opportunities.
              </p>
            </AppearOnScroll>
          </div>

          {/* Right form */}
          <AppearOnScroll delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="fullName" type="text" required placeholder="Full Name" value={form.fullName} onChange={handleChange} className={inputClass} />
                <input name="organization" type="text" placeholder="Organization / University" value={form.organization} onChange={handleChange} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="role" type="text" placeholder="Role / Designation" value={form.role} onChange={handleChange} className={inputClass} />
                <input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="phone" type="tel" placeholder="Phone / WhatsApp" value={form.phone} onChange={handleChange} className={inputClass} />
                <select
                  name="interest"
                  required
                  value={form.interest}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>Area of Interest</option>
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full text-[1.7rem] leading-[2.4rem] p-4 bg-card border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground resize-y"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center h-[5.6rem] px-12 text-[1.8rem] font-semibold rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request a Call"}
              </button>
            </form>
          </AppearOnScroll>
        </div>
      </div>
    </section>
  );
};

export default QuickConnect;
