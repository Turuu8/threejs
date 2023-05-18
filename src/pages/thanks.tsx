import { ThanksWeb } from "@/components";
import Image from "next/image";
import { useEffect, useState } from "react";

const thanks = () => {
  const [inner, setInner] = useState(0);
  useEffect(() => setInner(() => window.innerWidth), []);
  return (
    <main className="w-full relative">
      <div className="w-full max-w-[1920px] m-auto px-[32px] lg:px-[45px]">
        {/*  ________________ HERO SECTION ________________    */}
        <section className="flexcol items-center text-center p-[160px_0_80px__0] font-[100] gap-[20px] lg:p-[200px_0_100px__0]">
          <h1 className="font-['Inter'] text-[18px] leading-[22px] uppercase sm:text-[24px] sm:leading-[28px] lg:text-[28px] lg:leading-[34px]">
            талархал
          </h1>
          <p className="text-[12px] font-['Roboto'] leading-[14px] sm:text-[16px] sm:leading-[18px] lg:text-[18px] lg:leading-[21px] lg:w-[660px]">
            Удаан хугацааны турш бидэнтэй хамт байж олон зүйлс зааж сургаж хааяа хатуу, ихэнхдээ зөөлөн хандаж дэмжиж ирсэн багш нартаа баярлалаа. 3
            нь шатны сургалтаар маш их зүйлийг сурч, өөрсдийнхөө сонирхол чаддаг зүйлсээ мэдэж авч үр бүтээлтэй өнгөрүүллээ.
          </p>
        </section>
        <section className="grid gap-x-[18px] gap-y-[32px] grid-cols-2 sm:gap-x-[24px] md:grid-cols-3 lg:grid-cols-5">
          {teamList.map((el, i) => {
            return (
              <div key={i} className={`${i === 4 && "col-span-2 w-[50%] m-auto px-[4.5px] sm:px-[6px]  md:col-span-1 md:w-full md:px-0"} `}>
                <div className="w-full h-[200px] bg-[#D9D9D9] sm:h-[320px] md:h-[280px] lg:h-[220px]">{/* <Image/> */}</div>
                <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300]">
                  <h2 className="text-[10px] leading-[12px] sm:text-[16px] sm:leading-[18px]">{el.tag}</h2>
                  <h1 className="text-[12px] leading-[14px] sm:text-[16px] sm:leading-[18px]">{el.name}</h1>
                </div>
              </div>
            );
          })}
        </section>
        <section className="text-center flex justify-center font-['Roboto'] text-[12px] leading-[14px] font-[100] py-[130px] sm:text-[16px] sm:leading-[18px] lg:text-[18px] lg:leading-[21px]">
          <h1 className="lg:w-[645px]">
            Бид бүхэн хамтдаа олон шинэ зүйлийг суралцсан. Ангийхандаа дэлхийн хэмжээний инженэр болоход нь өндрөөс өндөр амжилт хүсье.
          </h1>
        </section>
        <section className="pb-[150px]">
          <h1 className="font-['Inter'] font-[200] text-[12px] leading-[14px] pb-[15px] sm:text-[16px] sm:leading-[18px] lg:text-[24px] lg:leading-[29px]">
            Leap 3
          </h1>
          <div className="grid gap-x-[18px] gap-y-[32px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {glassList.map((el, i) => {
              return (
                <div key={i} className="">
                  <div className="w-full h-[200px] bg-[#D9D9D9]  sm:h-[320px] md:h-[280px] lg:h-[220px]">{/* <Image/> */}</div>
                  <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300]">
                    <h2 className="text-[10px] leading-[12px] sm:text-[14px] sm:leading-[16px]">{el.tag}</h2>
                    <h1 className="text-[12px] leading-[14px] sm:text-[16px] sm:leading-[18px]">{el.name}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <ThanksWeb />
      </div>
    </main>
  );
};

export default thanks;

const teamList = [
  {
    tag: "БАГИЙН АХЛАГЧ",
    name: "Т. ДОЛЖИНСҮРЭН",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Г. ТӨРХМӨНХ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "З. БИЛГҮҮН",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Х. ОЮУЭРДЭНЭ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
];

const glassList = [
  {
    tag: "БАГИЙН АХЛАГЧ",
    name: "Т. ДОЛЖИНСҮРЭН",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Г. ТӨРХМӨНХ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "З. БИЛГҮҮН",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Х. ОЮУЭРДЭНЭ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
  {
    tag: "БАГИЙН АХЛАГЧ",
    name: "Т. ДОЛЖИНСҮРЭН",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Г. ТӨРХМӨНХ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "З. БИЛГҮҮН",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Х. ОЮУЭРДЭНЭ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
];
