import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className="flex w-full items-center border rounded-full border-[#ffffff99]
    justify-between gap-3 py-4 px-16 max-w-[95vw] mx-auto mt-[40px]"
    >
      <Image
        src="/images/logo-full.png"
        alt="OSN Logo"
        height={52}
        width={212}
      />

      <div className="flex items-center gap-3">
        {NavLinks.map((nav) => (
          <Link href={nav.url} key={nav.title} className="nav-link">
            <p className="font-medium mb-0.5">{nav.title}</p>
            <span className="block w-0 h-0.5 bg-primary mx-auto"></span>
          </Link>
        ))}

        <button
          className="py-2.5 px-6 font-semibold text-primary border border-primary 
        rounded-full ml-3"
        >
          JOIN COMMUNITY
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

const NavLinks = [
  {
    title: "About Us",
    url: "",
  },
  {
    title: "Projects",
    url: "",
  },
  {
    title: "Events",
    url: "",
  },
  {
    title: "Community",
    url: "",
  },
  {
    title: "Resources",
    url: "",
  },
];
