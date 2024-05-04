import * as React from "react";

interface ComingSoonItemProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export const ComingSoonItem: React.FC<ComingSoonItemProps> = ({
  title,
  description,
  imageUrl,
  altText,
}) => (
  <div className="flex flex-col grow pb-14 w-full rounded-md bg-zinc-900 bg-opacity-60 max-md:mt-10 max-md:max-w-full">
    <div className="justify-center self-end px-1.5 py-1 mr-8 text-xs font-bold leading-3 text-center text-black bg-white rounded-[100px] max-md:mr-2.5">
      COMING SOON
    </div>
    <div className="flex flex-col px-8 mt-7 max-md:px-5 max-md:max-w-full">
      <h2 className="text-4xl leading-10 text-white uppercase">{title}</h2>
      <div className="mt-9 text-2xl font-bold leading-7 bg-clip-text bg-[linear-gradient(90deg,#3D8BFF_0%,#AB23FF_100%)]">
        {description}
      </div>
    </div>
    <img
      src={imageUrl}
      alt={altText}
      className="mt-16 max-w-full aspect-[1.82] w-[423px] max-md:mt-10"
    />
    <p className="mt-8 mr-8 text-lg leading-6 text-white max-md:mr-2.5 max-md:max-w-full">
      Set to debut in the latter half of 2024, the CREON token serves as the
      pioneering link between cutting-edge AI initiatives and blockchain
      technology. This innovative token provides NFT and token holders with
      unparalleled access to our Launchpad, AI tools, and exclusive pre-launch
      investment prospects.
    </p>
  </div>
);
