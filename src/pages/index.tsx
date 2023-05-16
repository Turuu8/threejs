import { Description, HeroSection, ShapeSideSixModel, ThanksWeb } from "@/components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const modelRef = useRef(null);

  useEffect(() => {
    // scrollGsap();
  }, []);

  function scrollGsap() {
    const element = modelRef.current;
    gsap.to(element, {
      duration: 3,
      delay: 1.2,
      bottom: "50vh",
      height: "40%",
      width: "80%",
      right: 0,
      scrollTrigger: {
        trigger: element,
        scrub: 1,
        markers: true,
        start: "top 25%",
        end: "150% 20%",
        toggleClass: "active",
      },
    });
  }

  return (
    <main className="w-full]">
      <div className="w-full max-w-[1920px] m-auto px-[60px]">
        <HeroSection />
        <section className="relative h-[200vh]">
          <div className="w-full h-[100vh] flexrow justify-between">
            <div className="w-[60%] h-full flex items-center justify-center">
              <div ref={modelRef} className="h-[30%] w-[60%] z-10 absolute left-0 m-auto">
                <ShapeSideSixModel />
              </div>
            </div>
            <div className="w-[40%] h-full flex items-center">
              <Description
                title="Бидний тухай"
                detail="Бидний төсөл нь Монгол улсад төдийгүй гадаадад болох бүх өдөрлөг, эвэнтийг хэрэглэгчид харахад хялбар болгох зорилготой бөгөөд мөн та өөрөө ч эвэнтээ зохиох боломжтой юм."
              />
            </div>
          </div>
          <div className="h-[100vh]"></div>
        </section>
        <section>
          <div className="w-full flex justify-center pb-[130px]">
            <h3 className="font-['Roboto'] font-[100] text-[30px] w-[650px] text-center leading-[35px]">
              Төслийн хүрээнд манай баг 1 аппликэйшин , 3 төрлийн вэбсайт хийсэн бөгөөд та өөрийн сонирхож буй хэсэгрүүгээ үсрэх товч дарж шилжээрэй.
            </h3>
          </div>
          {/* ___________ right ___________ */}
          <div className="flexrow w-full h-[880px] mb-[200px]">
            <div className="w-[58%] h-full bg-[#D9D9D9]"></div>
            <div className="w-[42%] h-full flexcol items-center justify-center pl-[50px] gap-[40px]">
              <Description
                title="Эвэнт хайх вэбсайт"
                detail="Та энэхүү вэбсайтруу орсоноор хүссэн эвэнтээ өдрөөр, нэрээр, катигороор маш амархан хайж олох боломжтой бөгөөд заавал нэвтэрч орохгүй байсан ч эвэнтээ харж чадах юм."
              />
              <button className="flexrow items-center justify-center gap-[10px] px-[54px] py-[25px] border-[1px] rounded-[50px] border-[#000000]">
                <p className="text-[30px] font-['Roboto'] font-[100]">Вэбсайтруу шилжих</p>
                <Image alt="right arrow icon" width={30} height={30} src="/icons/arrow-right.svg" className="w-[30px] h-[30px]" />
              </button>
            </div>
          </div>
          {/* ___________ left ___________ */}
          <div className="flexrow w-full h-[880px] mb-[200px]">
            <div className="w-[42%] h-full flexcol items-center justify-center pr-[50px] gap-[40px]">
              <Description
                title="Эвэнт үүсгэх ,хянах самбар"
                detail="Хэрвээ та эвэнт зохион байгуулах гэж байгаа бол энэхүү хяналтын самбарлуу нэвтэрч ороод эвэнтээ хүссэн үедээ үүсгэх боломжтой юм."
              />
              <button className="flexrow items-center justify-center gap-[10px] px-[54px] py-[25px] border-[1px] rounded-[50px] border-[#000000]">
                <p className="text-[30px] font-['Roboto'] font-[100]">Вэбсайтруу шилжих</p>
                <Image alt="right arrow icon" width={30} height={30} src="/icons/arrow-right.svg" className="w-[30px] h-[30px]" />
              </button>
            </div>
            <div className="w-[58%] h-full bg-[#D9D9D9]"></div>
          </div>
          {/* ___________ right ___________ */}
          <div className="flexrow w-full h-[880px] mb-[200px]">
            <div className="w-[58%] h-full bg-[#D9D9D9]"></div>
            <div className="w-[42%] h-full flexcol items-center justify-center pl-[50px] gap-[40px]">
              <Description
                title="UB Events аппликэйшин"
                detail="Манай аппликэйшнийг татаж аваад та хүссэн үедээ эвэнтээ амархан хайж, цаг алдалгүй мэдээлэл аваарай"
              />
            </div>
          </div>
        </section>
        <ThanksWeb />
      </div>
    </main>
  );
}
