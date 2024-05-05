import Link from "next/link";

export default function NavLink(prompt: {
  title: string;
  href: string;
  isComingSoon?: boolean;
}) {
  return (
    <>
      <div className="flex gap-1 text-center whitespace-nowrap">
        <Link
          href={prompt.href}
          className={
            "text-lg text-white transition-all cursor-default" +
            (!prompt.isComingSoon ? " hover:text-[#3D8BFF] " : "")
          }
          style={{
            cursor: prompt.isComingSoon ? "default" : "pointer",
          }}
        >
          {prompt.title}
        </Link>
        {prompt.isComingSoon && (
          <div className="justify-center self-start px-1 pt-0.5 pb-px text-xs text-[#AB23FF] bg-black rounded-[100px]">
            SOON
          </div>
        )}
      </div>
    </>
  );
}

// <Link
//   href={prompt.href}
//   // className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
//   className=""
// >
//   {prompt.title}
// </Link>
