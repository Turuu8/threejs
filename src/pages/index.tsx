import { Description, HeroSection, Model, ThanksWeb, Usage } from "@/components";

export default function Home() {
  return (
    <main className="w-full relative">
      {/* <video src="/videos/background.mov" autoPlay loop muted className="fixed z-[-1] opacity-[1]" /> */}
      <div className="w-full max-w-[1920px] m-auto px-[60px] max-[1600px]:px-[45px] max-[768px]:px-[32px]">
        <HeroSection />
        <section className="relative">
          <div className="w-full h-[100vh] flexrow justify-between max-[1024px]:grid max-[1024px]:grid-rows-[auto_auto] max-[1024px]:gap-[100px] max-[1024px]:h-[60vh] max-[768px]:h-[50vh] max-[425px]:h-[30vh]">
            <div className="w-[60%] h-full flex items-center justify-center max-[1024px]:w-full">
              <Model />
            </div>
            <div className="w-[40%] h-full flex items-center max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:justify-center">
              <Description
                title="Бидний тухай"
                detail="Бидний төсөл нь Монгол улсад төдийгүй гадаадад болох бүх өдөрлөг, эвэнтийг хэрэглэгчид харахад хялбар болгох зорилготой бөгөөд мөн та өөрөө ч эвэнтээ зохиох боломжтой юм."
              />
            </div>
          </div>
          {/* <div className="h-[100vh] max-[1024px]:hidden">model</div> */}
        </section>
        <Usage />
        <ThanksWeb />
      </div>
    </main>
  );
}
