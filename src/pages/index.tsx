import { Description, HeroSection, Model, ThanksWeb, Usage } from "@/components";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Tween } from "react-gsap";

export default function Home() {
  const [fov, setFov] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setFov(() => window.innerWidth);
    const screenScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", screenScroll);
    return () => window.removeEventListener("scroll", screenScroll);
  }, []);

  console.log(scroll);

  return (
    <main className="w-full relative">
      <video src="/videos/background.mov" autoPlay loop muted className="fixed z-[-1] opacity-[1] h-[100vh]" />
      <div className="w-full max-w-[1920px] m-auto px-[60px] max-[1600px]:px-[45px] max-[768px]:px-[32px]">
        <HeroSection />
        <section className="">
          <div className="w-full h-[100vh] relative flexrow justify-between max-[1024px]:grid max-[1024px]:grid-rows-[auto_32vh] max-[1024px]:gap-[100px] max-[1024px]:h-auto max-[768px]:grid-rows-[auto_26vh] max-[580px]:grid-rows-[auto_22vh] max-[480px]:grid-rows-[auto_20vh] max-[425px]:gap-[50px] max-[425px]:grid-rows-[auto_18vh]">
            <Tween
              to={{
                y: fov < 600 ? "20vh" : "50vh",
                width: "100%",
                scrollTrigger: {
                  trigger: "#model",
                  start: "30% center",
                  end: "120% center",
                  scrub: 0.5,
                },
              }}
            >
              <div className="w-[60%]  h-full flex items-center justify-center max-[1024px]:w-full"></div>
              <div id="model" className="w-[60%] absolute bottom-[-20vh] h-full flexcol items-center justify-center max-[1024px]:w-full">
                <Model fov={fov} scroll={scroll} />
              </div>
            </Tween>
            <div className="w-[40%] h-full flex items-center max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:justify-center">
              <Description
                title="Бидний тухай"
                detail="Бидний төсөл нь Монгол улсад төдийгүй гадаадад болох бүх өдөрлөг, эвэнтийг хэрэглэгчид харахад хялбар болгох зорилготой бөгөөд мөн та өөрөө ч эвэнтээ зохиох боломжтой юм."
              />
            </div>
          </div>
          <div className="h-[50vh] xl:h-[65vh]"></div>
        </section>
        <Usage />
        <ThanksWeb />
      </div>
    </main>
  );
}

// max-[768px]:h-[50vh] max-[425px]:h-[30vh]
