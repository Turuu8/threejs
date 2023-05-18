export const Description = ({ title, detail }: { title: string; detail: string }) => {
  return (
    <div className="w-full flexcol justify-center gap-[20px] max-[1600px]:gap-[10px] max-[1024px]:w-[80%] max-[1024px]:pt-0 max-[768px]:w-[88%] max-[768px]:gap-[10px] max-[425px]:w-[97%]">
      <h1 className="font-['Inter'] font-[200] text-[38px] leading-[48px] uppercase text-center max-[1600px]:text-[28px] max-[768px]:text-[24px] max-[768px]:leading-[28px] max-[425px]:text-[18px] max-[425px]:leading-[21px]">
        {title}
      </h1>
      <p className="font-['Roboto'] font-[100] text-[28px] leading-[35px] text-center max-[1600px]:text-[22px] max-[1600px]:leading-[26px] max-[1024px]:text-[18px] max-[768px]:text-[16px] max-[768px]:leading-[18px] max-[425px]:text-[12px] max-[425px]:leading-[14px]">
        {detail}
      </p>
    </div>
  );
};
