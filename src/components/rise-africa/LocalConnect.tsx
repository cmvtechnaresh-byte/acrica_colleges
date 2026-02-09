import AppearOnScroll from "@/components/AppearOnScroll";
import emmanuelImage from "@/assets/regional-leadership.jpeg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row items-start gap-10 rounded-2xl border border-border bg-card p-8 md:p-12">
          <img
            src={emmanuelImage}
            alt="Emmanuel Okoro Kalu — Regional Partner"
            className="w-full md:w-[24rem] aspect-[4/5] rounded-2xl object-cover shrink-0"
            loading="lazy"
          />
          <div className="flex-1">
            <h3 className="text-[2.2rem] font-bold mb-1">Emmanuel Okoro Kalu</h3>
            <p className="text-[1.6rem] text-accent font-medium mb-6">
              Regional Partner &amp; Lead Coordinator — West &amp; Central Africa
            </p>
            <p className="text-[1.6rem] text-muted-foreground leading-[1.7] mb-6">
              Emmanuel Okoro Kalu is a results-driven education and ecosystem-building professional with experience across banking operations, media, and education technology. Currently serving as Regional Partner and Lead Coordinator for Elevate My Skill (EMS) in Nigeria, he leads strategic academic collaborations...
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="text-[1.4rem] h-auto py-3 px-6">
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[800px] w-[90vw] p-0 overflow-hidden bg-card">
                <ScrollArea className="max-h-[85vh]">
                  <div className="p-8 md:p-10">
                    <DialogHeader className="mb-6 space-y-4">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <img
                          src={emmanuelImage}
                          alt="Emmanuel Okoro Kalu"
                          className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover shrink-0"
                        />
                        <div className="space-y-2">
                          <DialogTitle className="text-[2.4rem] md:text-[3rem] font-bold leading-tight">
                            Emmanuel Okoro Kalu
                          </DialogTitle>
                          <DialogDescription className="text-[1.6rem] text-accent font-medium">
                            Regional Partner &amp; Lead Coordinator — West &amp; Central Africa
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6 text-[1.6rem] leading-relaxed text-muted-foreground">
                      <p>
                        Emmanuel Okoro Kalu is a results-driven education and ecosystem-building professional with experience across banking operations, media, and education technology. Currently serving as Regional Partner and Lead Coordinator for Elevate My Skill (EMS) in Nigeria, he leads strategic academic collaborations and drives industry-aligned upskilling initiatives aimed at improving graduate employability.
                      </p>
                      <p>
                        Emmanuel holds an Ordinary National Diploma in Science Laboratory Technology from Hussaini Adamu Federal Polytechnic, Kazaure, and is currently pursuing a B.Sc. in Health Education at Bayero University Kano. His background in managing high-volume financial transactions in the banking sector has shaped a strong foundation of precision, accountability, and trust, which he now applies to building sustainable education partnerships.
                      </p>
                      <p>
                        He is deeply passionate about bridging traditional academic systems with the global technology economy, enabling Nigerian students to access practical, industry-relevant certifications. Outside of his professional work, Emmanuel enjoys travelling and writing, with a keen interest in cultural exchange and youth empowerment.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </AppearOnScroll>
    </div>
  </section>
);

export default LocalConnect;
