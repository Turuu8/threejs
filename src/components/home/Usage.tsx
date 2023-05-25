import { useRouter } from "next/router";
import { Description } from "../Description";
import Image from "next/image";
import Link from "next/link";

export const Usage = () => {
  const router = useRouter();
  return (
    <section className="pt-[100px]">
      <div className="w-full flex justify-center pb-[130px] max-[1024px]:pb-[100px] max-[768px]:pb-[70px]">
        <h3 className="font-['Roboto'] font-[100] text-[30px] w-[650px] text-center leading-[35px] max-[1600px]:text-[22px] max-[1600px]:leading-[26px] max-[1600px]:w-[500px] max-[1024px]:w-[70%] max-[1024px]:text-[18px] max-[1024px]:leading-[18px] max-[768px]:w-[88%] max-[425px]:text-[12px] max-[425px]:leading-[14px] max-[425px]:w-[97%]">
          Төслийн хүрээнд манай баг 1 аппликэйшин , 3 төрлийн вэбсайт хийсэн бөгөөд та өөрийн сонирхож буй хэсэгрүүгээ үсрэх товч дарж шилжээрэй.
        </h3>
      </div>
      {/* ______________________ right ______________________ */}
      <div className="flexrow w-full h-[880px] mb-[200px] max-[1600px]:mb-[150px] max-[1600px]:h-[660px] max-[1024px]:grid max-[1024px]:grid-rows-[minmax(635px,735px)_auto] max-[1024px]:gap-[70px] max-[1024px]:h-auto max-[1024px]:mb-[190px] max-[768px]:grid-rows-[minmax(435px,635px)_auto] max-[768px]:gap-[40px] max-[768px]:mb-[100px] max-[425px]:mb-[50px] max-[425px]:grid-rows-[minmax(200px,240px)_auto] max-[425px]:gap-[30px] ">
        <div className="flex justify-center w-[58%] h-full max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:h-full">
          <video src="/videos/Web.mov" autoPlay loop muted className="h-full" />
        </div>
        <div className="w-[42%] h-full flexcol items-center justify-center pl-[50px] gap-[40px] max-[1600px]:pl-[40px] max-[1024px]:w-full max-[1024px]:pl-0 max-[768px]:gap-[20px]">
          <Description
            title="Эвэнт хайх вэбсайт"
            detail="Та энэхүү вэбсайтруу орсоноор хүссэн эвэнтээ өдрөөр, нэрээр, катигороор маш амархан хайж олох боломжтой бөгөөд заавал нэвтэрч орохгүй байсан ч эвэнтээ харж чадах юм."
          />
          <button
            className="flexrow items-center justify-center gap-[10px] px-[54px] py-[25px] border-[1px] rounded-[50px] border-[#fff] max-[1600px]:gap-[5px]  max-[1600px]:p-[15px_40px] max-[768px]:p-[8px_25px] max-[768px]:border-[0.1px] max-[768px]:gap-[8px] max-[425px]:p-[10px_12px]"
            onClick={() => router.push("https://event-web-kappa.vercel.app/")}
          >
            <p className="text-[30px] font-['Roboto'] font-[100]  max-[1600px]:text-[22px] max-[768px]:text-[14px] max-[768px]:font-[300] max-[425px]:text-[12px]">
              Вэбсайтруу шилжих
            </p>
            <Image
              alt="right arrow icon"
              width={30}
              height={30}
              src="/icons/arrow-right.svg"
              className="w-[30px] h-[30px] max-[1600px]:w-[25px]  max-[1600px]:h-[25px] max-[768px]:w-[18px] max-[768px]:h-[18px] max-[768px]:mr-[-5px]"
            />
          </button>
        </div>
      </div>
      {/* ______________________ left ______________________ */}
      <div className="flexrow w-full h-[880px] mb-[200px] max-[1600px]:mb-[150px] max-[1600px]:h-[660px] max-[1024px]:grid max-[1024px]:grid-rows-[minmax(735px,735px)_auto] max-[1024px]:gap-[70px] max-[1024px]:h-auto max-[1024px]:mb-[190px] max-[768px]:grid-rows-[minmax(435px,635px)_auto] max-[768px]:gap-[40px] max-[768px]:mb-[100px] max-[425px]:mb-[50px] max-[425px]:grid-rows-[minmax(200px,240px)_auto] max-[425px]:gap-[30px] ">
        <div className="w-[42%] h-full flexcol items-center justify-center pr-[50px] gap-[40px]  max-[1600px]:pr-[40px] max-[1024px]:w-full max-[1024px]:h-[185px] max-[1024px]:pr-0 max-[768px]:gap-[20px] max-[768px]:h-auto">
          <Description
            title="Эвэнт үүсгэх ,хянах самбар"
            detail="Хэрвээ та эвэнт зохион байгуулах гэж байгаа бол энэхүү хяналтын самбарлуу нэвтэрч ороод эвэнтээ хүссэн үедээ үүсгэх боломжтой юм."
          />
          <button className="flexrow items-center justify-center gap-[10px] px-[54px] py-[25px] border-[1px] rounded-[50px] border-[#fff]  max-[1600px]:gap-[5px]  max-[1600px]:p-[15px_40px] max-[768px]:p-[8px_25px] max-[768px]:border-[0.1px] max-[768px]:gap-[8px] max-[425px]:p-[10px_12px]">
            <p className="text-[30px] font-['Roboto'] font-[100]  max-[1600px]:text-[22px] max-[768px]:text-[14px] max-[768px]:font-[300] max-[425px]:text-[12px]">
              Вэбсайтруу шилжих
            </p>
            <Image
              alt="right arrow icon"
              width={30}
              height={30}
              src="/icons/arrow-right.svg"
              className="w-[30px] h-[30px]  max-[1600px]:w-[25px]  max-[1600px]:h-[25px] max-[768px]:w-[18px] max-[768px]:h-[18px] max-[768px]:mr-[-5px]"
            />
          </button>
        </div>
        <div className="w-[58%] h-full max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:h-full">
          <video src="/videos/adminWeb.mov" autoPlay loop muted className="h-full" />
        </div>
      </div>
      {/* ______________________ right ______________________ */}
      <div className="flexrow w-full h-[880px] mb-[200px] max-[1600px]:mb-[150px] max-[1600px]:h-[660px] max-[1024px]:grid max-[1024px]:grid-rows-[minmax(735px,735px)_auto] max-[1024px]:gap-[70px] max-[1024px]:h-auto max-[1024px]:mb-[190px] max-[768px]:grid-rows-[minmax(435px,635px)_auto] max-[768px]:gap-[40px] max-[768px]:mb-[100px] max-[425px]:mb-[50px] max-[425px]:grid-rows-[minmax(200px,240px)_auto] max-[425px]:gap-[30px] ">
        <div className="w-[58%] h-full flex justify-center  max-[1024px]:row-start-1 max-[1024px]:w-full max-[1024px]:h-full">
          <video src="/videos/app.mov" autoPlay loop muted className="h-full" />
        </div>
        <div className="w-[42%] h-full flexcol items-center justify-center pl-[50px] gap-[40px] max-[1600px]:pl-[40px] max-[1024px]:w-full max-[1024px]:pl-0">
          <Description
            title="UB Events аппликэйшин"
            detail="Манай аппликэйшнийг татаж аваад та хүссэн үедээ эвэнтээ амархан хайж, цаг алдалгүй мэдээлэл аваарай"
          />
        </div>
      </div>
    </section>
  );
};
