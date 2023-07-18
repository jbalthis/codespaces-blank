import React from "react";
import { clsx } from "clsx";
import Image from "next/image";

export interface ICardProps {
  title: string;
  sub: string;
  showSub: boolean;
  imgUrl: string;
  background: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({
  title,
  sub,
  showSub,
  imgUrl,
  background,
  children,
}) => {
  console.log("Card", title, sub, showSub, imgUrl, background, children);

  return (
    <div
      className={clsx(
        `bg-grayLight w-full h-full border border-grayDark rounded-md items-center justify-center flex flex-col`
      )}
    >
      <div className="text-3xl font-semibold">{title}</div>
      {showSub ? <div>{sub}</div> : <></>}

      <div className="min-h-[250px] block w-full">{children}</div>
      <Image
        height={50}
        width={50}
        src={imgUrl}
        alt={title}
        className="content-fit"
      />
    </div>
  );
};

export default Card;
