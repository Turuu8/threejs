export const Description = ({ title, detail }: { title: string; detail: string }) => {
  return (
    <div className="w-full flexcol justify-center gap-[20px]">
      <h1 className="font-['Inter'] font-[200] text-[38px] leading-[48px] uppercase text-center">{title}</h1>
      <p className="font-['Roboto'] font-[100] text-[28px] leading-[35px] text-center">{detail}</p>
    </div>
  );
};
