import { Description } from "../Description";
import Image from "next/image";

export const Usage = () => {
  return (
    <section className="pt-[100px]">
      <div className="w-full flex justify-center pb-[130px]">
        <h3 className="font-['Roboto'] font-[100] text-[30px] w-[650px] text-center leading-[35px] max-[1600px]:text-[22px] max-[1600px]:leading-[26px] max-[1600px]:w-[500px] max-[1024px]:w-[70%] max-[1024px]:text-[18px] max-[1024px]:leading-[20px]">
          Төслийн хүрээнд манай баг 1 аппликэйшин , 3 төрлийн вэбсайт хийсэн бөгөөд та өөрийн сонирхож буй хэсэгрүүгээ үсрэх товч дарж шилжээрэй.
        </h3>
      </div>
      {/* ___________ right ___________ */}
      <div className="flexrow w-full h-[880px] mb-[200px] max-[1600px]:mb-[150px] max-[1600px]:h-[660px] max-[1024px]:grid max-[1024px]:grid-rows-[minmax(735px,735px)_auto] max-[1024px]:gap-[90px] max-[1024px]:h-auto">
        <div className="w-[58%] h-full bg-[#D9D9D9] max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:h-[735px]"></div>
        <div className="w-[42%] h-full flexcol items-center justify-center pl-[50px] gap-[40px] max-[1600px]:pl-[40px] max-[1024px]:w-full">
          <Description
            title="Эвэнт хайх вэбсайт"
            detail="Та энэхүү вэбсайтруу орсоноор хүссэн эвэнтээ өдрөөр, нэрээр, катигороор маш амархан хайж олох боломжтой бөгөөд заавал нэвтэрч орохгүй байсан ч эвэнтээ харж чадах юм."
          />
          <button className="flexrow items-center justify-center gap-[10px] px-[54px] py-[25px] border-[1px] rounded-[50px] border-[#000000] max-[1600px]:gap-[5px]  max-[1600px]:p-[15px_40px]">
            <p className="text-[30px] font-['Roboto'] font-[100]  max-[1600px]:text-[22px]">Вэбсайтруу шилжих</p>
            <Image
              alt="right arrow icon"
              width={30}
              height={30}
              src="/icons/arrow-right.svg"
              className="w-[30px] h-[30px] max-[1600px]:w-[25px]  max-[1600px]:h-[25px]"
            />
          </button>
        </div>
      </div>
      {/* ___________ left ___________ */}
      <div className="flexrow w-full h-[880px] mb-[200px] max-[1600px]:mb-[150px] max-[1600px]:h-[660px] max-[1024px]:grid max-[1024px]:grid-rows-[minmax(735px,735px)_auto] max-[1024px]:gap-[90px] max-[1024px]:h-auto">
        <div className="w-[42%] h-full flexcol items-center justify-center pr-[50px] gap-[40px]  max-[1600px]:pr-[40px] max-[1024px]:w-full max-[1024px]:h-[185px]">
          <Description
            title="Эвэнт үүсгэх ,хянах самбар"
            detail="Хэрвээ та эвэнт зохион байгуулах гэж байгаа бол энэхүү хяналтын самбарлуу нэвтэрч ороод эвэнтээ хүссэн үедээ үүсгэх боломжтой юм."
          />
          <button className="flexrow items-center justify-center gap-[10px] px-[54px] py-[25px] border-[1px] rounded-[50px] border-[#000000]  max-[1600px]:gap-[5px]  max-[1600px]:p-[15px_40px]">
            <p className="text-[30px] font-['Roboto'] font-[100]  max-[1600px]:text-[22px]">Вэбсайтруу шилжих</p>
            <Image
              alt="right arrow icon"
              width={30}
              height={30}
              src="/icons/arrow-right.svg"
              className="w-[30px] h-[30px]  max-[1600px]:w-[25px]  max-[1600px]:h-[25px]"
            />
          </button>
        </div>
        <div className="w-[58%] h-full bg-[#D9D9D9] max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:h-[735px]"></div>
      </div>
      {/* ___________ right ___________ */}
      <div className="flexrow w-full h-[880px] mb-[200px] max-[1600px]:mb-[150px] max-[1600px]:h-[660px]">
        <div className="w-[58%] h-full bg-[#D9D9D9]"></div>
        <div className="w-[42%] h-full flexcol items-center justify-center pl-[50px] gap-[40px] max-[1600px]:pl-[40px]">
          <Description
            title="UB Events аппликэйшин"
            detail="Манай аппликэйшнийг татаж аваад та хүссэн үедээ эвэнтээ амархан хайж, цаг алдалгүй мэдээлэл аваарай"
          />
        </div>
      </div>
    </section>
  );
};
