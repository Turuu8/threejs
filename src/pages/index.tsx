import { Description, HeroSection, Model, ThanksWeb, Usage } from "@/components";

export default function Home() {
  return (
    <main className="w-full relative">
      {/* <video src="/videos/background.mov" autoPlay loop muted className="fixed z-[-1] opacity-[1]" /> */}
      <div className="w-full max-w-[1920px] m-auto px-[60px] max-[1600px]:px-[45px]">
        <HeroSection />
        <section className="relative">
          <div className="w-full h-[100vh] flexrow justify-between max-[1024px]:grid max-[1024px]:grid-rows-2 max-[1024px]:gap-[100px]">
            <div className="w-[60%] h-full flex items-center justify-center max-[1024px]:w-full">
              <div className="h-[30%] w-[60%] z-10 absolute left-0 m-auto container max-[1024px]:w-full max-[1024px]:h-[50%]">
                <Model />
              </div>
            </div>
            <div className="w-[40%] h-full flex items-center max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:justify-center">
              <Description
                title="Бидний тухай"
                detail="Бидний төсөл нь Монгол улсад төдийгүй гадаадад болох бүх өдөрлөг, эвэнтийг хэрэглэгчид харахад хялбар болгох зорилготой бөгөөд мөн та өөрөө ч эвэнтээ зохиох боломжтой юм."
              />
            </div>
          </div>
          {/* <div className="h-[100vh] max-[1024px]:hidden"><Model /></div> */}
        </section>
        <Usage />
        {/* <ThanksWeb /> */}
      </div>
    </main>
  );
}

export const scrollerConfig = {
  scroller: ".scroll-container",
  trigger: ".scroll-height",
  start: "top top",
  end: `100%`,
  scrub: true,
};
