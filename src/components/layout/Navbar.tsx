import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 h-[130px] w-full max-[1600px]:h-[95px] max-[1024px]:h-[70px]">
      <div className="max-w-[1920px] m-auto h-full px-[60px] items-center flexrow justify-between max-[1600px]:px-[45px]">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <h1 className="text-[30px] font-['Poppins'] font-[900] max-[1600px]:text-[21px]"> UB Events</h1>
        </button>
        <div className="flexrow gap-[32px] font-['Inter'] font-[300] text-[18px] max-[1600px]:text-[13px] max-[1600px]:gap-[25px]">
          {list.map((el, i) => {
            return (
              <button
                key={i}
                className="uppercase duration-[0.3s] hover:underline"
                onClick={() => {
                  router.push(el.path);
                }}
              >
                <h1>{el.text}</h1>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const list = [
  {
    text: "БАГИЙН ГИШҮҮД",
    path: "/about",
  },
  {
    text: "талархал",
    path: "/thanks",
  },
];
