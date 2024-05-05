import NavLink from "./NavLink";

export default function MenuOverlay(prompt: {
  navLinks: {
    title: string;
    path: string;
  }[];
}) {
  return (
    <ul className="flex flex-col py-4 items-center min-[1024px]:hidden bg-black w-1/2 absolute right-0 h-screen top-0">
      {prompt.navLinks.map((link, index) => (
        <li key={"link-" + index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
