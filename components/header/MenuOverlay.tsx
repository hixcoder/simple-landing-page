import NavLink from "./NavLink";

export default function MenuOverlay(prompt: {
  navLinks: {
    title: string;
    path: string;
  }[];
}) {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {prompt.navLinks.map((link, index) => (
        <li key={"link-" + index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
