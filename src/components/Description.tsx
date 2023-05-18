export const Description = ({ title, detail }: { title: string; detail: string }) => {
  return (
    <div className="w-full flexcol justify-center gap-[20px] max-[1600px]:gap-[10px] max-[1024px]:w-[75%] max-[1024px]:pt-0">
      <h1 className="font-['Inter'] font-[200] text-[38px] leading-[48px] uppercase text-center max-[1600px]:text-[28px]">{title}</h1>
      <p className="font-['Roboto'] font-[100] text-[28px] leading-[35px] text-center max-[1600px]:text-[22px] max-[1600px]:leading-[26px] max-[1024px]:text-[20px]">
        {detail}
      </p>
    </div>
  );
};
