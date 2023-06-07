/* eslint-disable react-hooks/rules-of-hooks */
import { ThanksWeb } from "@/components";
import Image from "next/image";
import { useEffect, useState } from "react";

const thanks = () => {
  const [inner, setInner] = useState(0);
  useEffect(() => setInner(() => window.innerWidth), []);
  return (
    <main className="w-full relative">
      <div className="w-full max-w-[1920px] m-auto px-[32px] lg:px-[45px] 2xl:px-[60px]">
        {/*  ________________ HERO SECTION ________________    */}
        <section className="flexcol items-center text-center p-[160px_0_80px__0] font-[100] gap-[20px] lg:p-[200px_0_100px__0] xl:pt-[180px] 2xl:pt-[21.5vh] 2xl:pb-[135px]">
          <h1 className="font-['Inter'] text-[18px] leading-[22px] uppercase sm:text-[24px] sm:leading-[28px] lg:text-[28px] lg:leading-[34px] xl:text-[30px] xl:leading-[34px]  2xl:text-[40px] 2xl:leading-[48px] ">
            талархал
          </h1>
          <p className="text-[12px] font-['Roboto'] leading-[14px] sm:text-[16px] sm:leading-[18px] lg:text-[18px] lg:leading-[21px] lg:w-[660px] xl:text-[22px] xl:leading-[26px] xl:w-[740px] 2xl:text-[30px] 2xl:leading-[35px] 2xl:w-[1015px]">
            Удаан хугацааны турш бидэнтэй хамт байж олон зүйлс зааж сургаж хааяа хатуу, ихэнхдээ зөөлөн хандаж дэмжиж ирсэн багш нартаа баярлалаа. 3
            нь шатны сургалтаар маш их зүйлийг сурч, өөрсдийнхөө сонирхол чаддаг зүйлсээ мэдэж авч үр бүтээлтэй өнгөрүүллээ.
          </p>
        </section>
        <section className="grid gap-x-[18px] gap-y-[50px] grid-cols-2 sm:gap-x-[24px] md:grid-cols-3 lg:grid-cols-5 lg:gap-x-[18px] xl:gap-x-[18px] 2xl:gap-x-[24px]">
          {teamList.map((el, i) => {
            return (
              <div key={i} className={`${i === 4 && "col-span-2 w-[50%] m-auto px-[4.5px] sm:px-[6px]  md:col-span-1 md:w-full md:px-0"} `}>
                <div className="w-full h-[200px] bg-[#D9D9D9] sm:h-[320px] md:h-[280px] lg:h-[220px] xl:h-[320px] 2xl:h-[430px]">
                  <Image src={el.image} width={500} height={500} alt="img" className="w-full h-full" />
                </div>
                <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300] xl:flexrow xl:gap-[0] xl:tracking-[-0.04em] xl:pt-[16px] 2xl:pt-[24px]">
                  <h1 className="text-[12px] leading-[14px] sm:text-[16px] sm:leading-[18px] xl:text-[14px] xl:leading-[16px] 2xl:text-[18px] 2xl:leading-[21px]">
                    {el.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </section>
        <section className="text-center flex justify-center font-['Roboto'] text-[12px] leading-[14px] font-[100] py-[130px] sm:text-[16px] sm:leading-[18px] lg:text-[18px] lg:leading-[21px] xl:text-[22px] xl:leading-[26px] xl:pb-[200px] 2xl:text-[30px] 2xl:leading-[35px] 2xl:pt-[180px] 2xl:pb-[240px]">
          <h1 className="lg:w-[645px] xl:w-[735px] 2xl:w-[1015px]">
            Бид бүхэн нэг анги болоод хамтдаа олон зүйлийг даван гаржээ. Цаашдаа өсөж хөгжөөд дэлхийн инженэр болно гэдэгт итгэлтэй байна. Бүгдийнх нь
            тус тусын замд нь амжилт хүсье
          </h1>
        </section>
        <section className="pb-[150px]">
          <h1 className="font-['Inter'] font-[200] text-[12px] leading-[14px] pb-[15px] sm:text-[16px] sm:leading-[18px] lg:text-[24px] lg:leading-[29px] xl:pb-[30px] 2xl:text-[30px] 2xl:leading-[35px] 2xl:pb-[60px]">
            Leap 3
          </h1>
          <div className="grid gap-x-[18px] gap-y-[32px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-[18px] xl:gap-y-[70px] 2xl:gap-x-[24px]">
            {glassList.map((el, i) => {
              return (
                <div key={i}>
                  <div className="w-full h-[200px] bg-[#D9D9D9] sm:h-[320px] md:h-[280px] lg:h-[220px] xl:h-[320px] 2xl:h-[430px]">
                    {/* <Image/> */}
                  </div>
                  <div className="flexcol gap-[8px] pt-[12px] font-['Inter'] font-[300] xl:flexrow xl:gap-[0] xl:tracking-[-0.04em] xl:pt-[16px] 2xl:pt-[24px]">
                    <h1 className="text-[12px] leading-[14px] sm:text-[16px] sm:leading-[18px] xl:text-[14px] xl:leading-[16px] 2xl:text-[18px] 2xl:leading-[21px]">
                      {el.name}
                    </h1>
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
    // tag: "БАГИЙН АХЛАГЧ",
    name: "ЖАВХЛАНТӨГС",
    image: "https://shorturl.at/vxJ17",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "БИЛГҮҮНДӨН",
    image: "https://shorturl.at/xCSY2",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТЭРГЭЛТЭНГИС",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "УГТАХБАЯР",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ДАШНЯАМ",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "З. БИЛГҮҮН",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Х. ОЮУЭРДЭНЭ",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
];

const glassList = [
  {
    // tag: "БАГИЙН АХЛАГЧ",
    name: "Т. ДОЛЖИНСҮРЭН",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Г. ТӨРХМӨНХ",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "З. БИЛГҮҮН",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Х. ОЮУЭРДЭНЭ",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТЭНГИС",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Б. БИЛГҮҮН",
    image: "",
  },
  {
    // tag: "БАГИЙН АХЛАГЧ",
    name: "Н. ГАНЗОРИГ",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТЭМҮҮЖИН",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Г. МӨНХБОЛД",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "МАНДАХ",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "",
    image: "",
  },
  {
    // tag: "ХӨГЖҮҮЛЭГЧ",
    name: "ТӨГСЖАРГАЛ",
    image: "",
  },
];
