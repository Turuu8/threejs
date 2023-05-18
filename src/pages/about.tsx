/* eslint-disable react-hooks/rules-of-hooks */
import { ThanksWeb } from "@/components";
import React, { useEffect, useState } from "react";

const about = () => {
  const [inner, setInner] = useState(0);
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
      <div className="max-w-[1920px] w-full m-auto px-[60px] max-[1600px]:px-[45px]">
        <section className="pt-[250px] w-full flex justify-center max-[1600px]:pt-[180px] max-[1024px]:pt-[160px]">
          <div className="w-[965px] text-center max-[1600px]:w-[700px]">
            <h1 className="uppercase font-['Inter'] pb-[20px] font-[100] text-[38px] max-[1600px]:text-[29px] max-[1600px]:pb-[10px]">
              МАНАЙ БАГИЙН ГИШҮҮД
            </h1>
            <p className="font-['Roboto'] font-[100] text-[24px] leading-[30px] tracking-[-0.04em] max-[1600px]:text-[18px] max-[1600px]:leading-[21px]">
              Нэг сарын хугацаанд багууд дор бүрнээ хичээж өөрсдийнхөө төслийг амжилттай дуусгалаа. Энэхүү вэбсайт, аппликэйшинийг одоогийн түвшиндээ
              хийж сурахын тулд нэг жил 4 сарын хугацааг зарцуулсан байна. Энэ хугацаанд санхүү болон сэтгэлзүйгээр дэмжиж бидэнд хөрөнгө оруулсан
              эцэг эхдээ маш их баярлалаа. Манай багийн хувьд өөрсдийгөө сорьж сонирхож байсан хэсгээ амжилттай дуусгаж төслийнхөө ард гарсандаа
              баяртай байна.{" "}
            </p>
          </div>
        </section>
        <section className="pt-[185px] w-full grid grid-cols-5 gap-[24px] pb-[100px] max-[1600px]:pt-[140px] max-[1600px]:gap-[18px] max-[1024px]:pt-[100px]">
          {teamList.map((el, i) => {
            return (
              <div key={i} className="w-full h-[475px] flexcol justify-between max-[1600px]:h-[360px] max-[1280px]:h-[310px] max-[1024px]:h-[290px]">
                <div className="h-[430px] w-fill bg-[#D9D9D9] max-[1600px]:h-[320px] max-[1280px]:h-[260px] max-[1024px]:h-[230px]"></div>
                <h1 className="font-['Inter'] font-[300] text-[18px] max-[1600px]:text-[13px] max-[1280px]:text-[14px]">
                  {el.tag} : {inner < 1280 && <br />} {el.name}
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
