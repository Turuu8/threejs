/* eslint-disable react-hooks/rules-of-hooks */
import { ThanksWeb } from "@/components";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const about = () => {
  const [inner, setInner] = useState(0);
  useEffect(() => setInner(() => window.innerWidth), []);
  useEffect(() => {
    const onSize = (e: any) => {
      setInner(e.target.innerWidth);
    };
    window.addEventListener("resize", onSize);
    return () => {
      window.removeEventListener("resize", onSize);
    };
  }, [inner]);

  return (
    <main className="w-full">
      <div className="max-w-[1920px] w-full m-auto px-[60px] max-[1600px]:px-[45px] max-[768px]:px-[32px]">
        <section className="pt-[250px] w-full flex justify-center max-[1600px]:pt-[180px] max-[1024px]:pt-[160px] max-[640px]:pt-[140px] max-[425px]:pt-[120px] ">
          <div className="w-[965px] text-center max-[1600px]:w-[700px]">
            <h1 className="uppercase font-['Inter'] pb-[20px] font-[100] text-[38px] max-[1600px]:text-[29px] max-[1600px]:pb-[10px] max-[768px]:text-[24px] max-[425px]:text-[18px] max-[425px]:leading-[21px]">
              МАНАЙ БАГИЙН ГИШҮҮД
            </h1>
            <p className="font-['Roboto'] font-[100] text-[24px] leading-[30px] tracking-[-0.04em] max-[1600px]:text-[18px] max-[1600px]:leading-[21px] max-[768px]:text-[16px] max-[425px]:text-[12px] max-[425px]:leading-[14px]">
              Нэг сарын хугацаанд багууд дор бүрнээ хичээж өөрсдийнхөө төслийг амжилттай дуусгалаа. Энэхүү вэбсайт, аппликэйшинийг одоогийн түвшиндээ
              хийж сурахын тулд нэг жил 4 сарын хугацааг зарцуулсан байна. Энэ хугацаанд санхүү болон сэтгэлзүйгээр дэмжиж бидэнд хөрөнгө оруулсан
              эцэг эхдээ маш их баярлалаа. Манай багийн хувьд өөрсдийгөө сорьж сонирхож байсан хэсгээ амжилттай дуусгаж төслийнхөө ард гарсандаа
              баяртай байна.
            </p>
          </div>
        </section>
        <section className="pt-[185px] w-full grid grid-cols-5 gap-[24px] pb-[100px] max-[1600px]:pt-[140px] max-[1600px]:gap-[18px] max-[1024px]:pt-[100px] max-[940px]:grid-cols-3 max-[940px]:gap-y-[24px] max-[640px]:gap-[12px] max-[640px]:pt-[80px] max-[425px]:grid-cols-2 max-[425px]:pb-[40px]">
          {teamList.map((el, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[475px] flexcol justify-between max-[1600px]:h-[360px] max-[1280px]:h-[310px] max-[1024px]:h-[290px] max-[940px]:h-[320px] max-[640px]:h-[270px] max-[425px]:h-[245px] ${
                  i >= 3 && "max-[940px]:ml-[60%] max-[425px]:m-0"
                } ${i === 0 && "max-[425px]:col-span-2 max-[425px]:pl-[26%] "}`}
              >
                <div
                  className={`h-[430px] w-fill max-[1600px]:h-[320px] max-[1280px]:h-[260px] max-[1024px]:h-[230px] max-[940px]:h-[270px] max-[640px]: max-[640px]:h-[230px] max-[425px]:h-[200px] ${
                    i === 0 && " max-[425px]:w-[66%] "
                  }`}
                >
                  <Image alt="image" src={el.image} width={500} height={500} className="w-full h-full object-contain" />
                </div>
                <h1
                  className={`font-['Inter'] font-[300] text-[18px] tracking-normal max-[1800px]:tracking-[-0.039em] max-[1760px]:text-[16px] max-[1600px]:text-[13px] max-[1280px]:text-[14px] max-[1280px]:tracking-normal max-[805px]:text-[12px] max-[425px]:text-[10px] max-[425px]:leading-[12px] ${
                    i === 0 && "max-[425px]:pl-[17%] "
                  }`}
                >
                  {el.tag} : {inner < 1280 && <div className="max-[425px]:h-[8px]" />} {el.name}
                </h1>
              </div>
            );
          })}
        </section>
        <ThanksWeb />
      </div>
    </main>
  );
};

export default about;

const teamList = [
  {
    tag: "БАГИЙН АХЛАГЧ",
    name: "Т. ДОЛЖИНСҮРЭН",
    image: "/image/DSC00406.jpg",
  },
  {
    tag: "ХӨГЖҮҮЛЭГЧ",
    name: "Г. ТӨРХМӨНХ",
    image: "/image/DSC09129.jpg",
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
    image: "/image/DSC00395.jpg",
  },
];
