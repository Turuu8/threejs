import { ThanksWeb } from "@/components";
import Image from "next/image";

const thanks = () => {
  return (
    <main className="w-full relative">
      <div className="w-full max-w-[1920px] m-auto px-[32px]">
        {/*  ________________ HERO SECTION ________________    */}
        <section className="flexcol text-center p-[160px_0_80px__0] font-[100] gap-[20px]">
          <h1 className="font-['Inter'] text-[18px] leading-[22px] uppercase">талархал</h1>
          <p className="text-[12px] font-['Roboto'] leading-[14px]">
            Удаан хугацааны турш бидэнтэй хамт байж олон зүйлс зааж сургаж хааяа хатуу, ихэнхдээ зөөлөн хандаж дэмжиж ирсэн багш нартаа баярлалаа. 3
            нь шатны сургалтаар маш их зүйлийг сурч, өөрсдийнхөө сонирхол чаддаг зүйлсээ мэдэж авч үр бүтээлтэй өнгөрүүллээ.
          </p>
        </section>
        <section className="grid gap-x-[18px] gap-y-[32px] grid-cols-2">
          {teamList.map((el, i) => {
            return (
              <div key={i} className="">
                <div className="w-full h-[200px] bg-[#D9D9D9]">{/* <Image/> */}</div>
                <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300]">
                  <h2 className="text-[10px] leading-[12px]">{el.tag}</h2>
                  <h1 className="text-[12px] leading-[14px]">{el.name}</h1>
                </div>
              </div>
            );
          })}
        </section>
        <section className="text-center font-['Roboto'] text-[12px] leading-[14px] font-[100] py-[130px]">
          <h1>Бид бүхэн хамтдаа олон шинэ зүйлийг суралцсан. Ангийхандаа дэлхийн хэмжээний инженэр болоход нь өндрөөс өндөр амжилт хүсье.</h1>
        </section>
        <section className="pb-[150px]">
          <h1 className="font-['Inter'] font-[200] text-[12px] leading-[14px] pb-[15px]">Leap 3</h1>
          <div className="grid gap-x-[18px] gap-y-[32px] grid-cols-2">
            {teamList.map((el, i) => {
              return (
                <div key={i} className="">
                  <div className="w-full h-[200px] bg-[#D9D9D9]">{/* <Image/> */}</div>
                  <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300]">
                    <h2 className="text-[10px] leading-[12px]">{el.tag}</h2>
                    <h1 className="text-[12px] leading-[14px]">{el.name}</h1>
                  </div>
                </div>
              );
            })}
            {teamList.map((el, i) => {
              return (
                <div key={i} className="">
                  <div className="w-full h-[200px] bg-[#D9D9D9]">{/* <Image/> */}</div>
                  <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300]">
                    <h2 className="text-[10px] leading-[12px]">{el.tag}</h2>
                    <h1 className="text-[12px] leading-[14px]">{el.name}</h1>
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
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
];
