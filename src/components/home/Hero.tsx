export const HeroSection = () => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center">
      <div className="flexcol justify-center items-center max-[1600px]:gap-[10px] max-[1024px]:gap-[5px] max-[768px]:gap-[3px]  max-[425px]:gap-0 ">
        <h1 className="font-['Italiana'] font-[400] text-[128px] leading-[150px] max-[1600px]:text-[90px] max-[1600px]:leading-[95px] max-[768px]:text-[70px] max-[768px]:leading-[75px] max-[640px]:text-[55px] max-[640px]:leading-[60px] max-[425px]:text-[36px] max-[425px]:leading-[42px]">
          UB EVENTS
        </h1>
        <h2 className="font-['Inter'] font-[200] text-[50px] leading-[60px] max-[1600px]:text-[37px] max-[1600px]:leading-[40px] max-[768px]:text-[28px] max-[768px]:leading-[30px] max-[640px]:text-[22px] max-[640px]:leading-[24px]  max-[425px]:text-[20px] max-[425px]:leading-[24px]">
          Every day can be special.
        </h2>
        <p className="font-['Roboto'] font-[100] text-[30px] w-[730px] text-center pt-[40px] leading-[40px] max-[1600px]:text-[22px] max-[1600px]:pt-[20px] max-[1600px]:leading-[28px] max-[1600px]:w-[545px] max-[1024px]:text-[18px] max-[1024px]:w-[440px] max-[1024px]:leading-[20px] max-[768px]:pt-[10px] max-[640px]:text-[16px] max-[640px]:leading-[18px] max-[640px]:w-[390px] max-[640px]:pt-[16px]  max-[425px]:text-[12px] max-[425px]:leading-[14px]  max-[425px]:pt-[24px] max-[425px]:w-[290px]">
          <span>Сайн байнуу манай вебсайтад тавтай морилно нуу?</span>
          <>
            Та яг одоо leap 3 дугаар шатны <span className=" capitalize">“merge”</span> багийн нэг сарын турш хийж, бүтээсэн төслийн танилцуулга
            вэбсайтаар зочилж байна.
          </>
        </p>
      </div>
    </section>
  );
};
