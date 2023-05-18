export const HeroSection = () => {
  return (
    <section className="w-full h-[70vh] flex items-end justify-center max-[1024px]:mb-[35vh]">
      <div className="flexcol justify-center items-center max-[1600px]:gap-[10px] max-[1024px]:gap-[5px]">
        <h1 className="font-['Italiana'] font-[400] text-[128px] leading-[150px] max-[1600px]:text-[90px] max-[1600px]:leading-[95px]">UB EVENTS</h1>
        <h2 className="font-['Inter'] font-[200] text-[50px] leading-[60px] max-[1600px]:text-[37px] max-[1600px]:leading-[40px]">
          Every day can be special.
        </h2>
        <p className="font-['Roboto'] font-[100] text-[30px] w-[730px] text-center pt-[40px] leading-[40px] max-[1600px]:text-[22px] max-[1600px]:pt-[20px] max-[1600px]:leading-[28px] max-[1600px]:w-[545px] max-[1024px]:text-[18px] max-[1024px]:w-[440px] max-[1024px]:leading-[20px]">
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
