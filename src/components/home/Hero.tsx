export const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flexcol justify-center items-center">
        <h1 className="font-['Italiana'] font-[400] text-[128px] leading-[150px]">UB EVENTS</h1>
        <h2 className="font-['Inter'] font-[200] text-[50px] leading-[60px]">Every day can be special.</h2>
        <p className="font-['Roboto'] font-[300] text-[30px] w-[730px] text-center pt-[40px] leading-[40px]">
          <span>Сайн байнуу манай вебсайтад тавтай морилно нуу?</span>
          <>
            Та яг одоо leap 3 дугаар шатны <span className=" capitalize">“merge”</span> багийн нэг сарын турш хийж, бүтээсэн төслийн танилцуулга
            вэбсайтаар зочилж байна.
          </>
        </p>
      </div>
    </div>
  );
};
