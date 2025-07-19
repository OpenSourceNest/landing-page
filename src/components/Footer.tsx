import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-[56px] px-[70px]">
      <Image
        src="/images/logo-full.png"
        alt="OSN Logo"
        height={52}
        width={212}
      />

      <p className="opacity-60 text-base">
        All rights resevered. Product of OSN{new Date().getFullYear()}.
      </p>
    </footer>
  );
};

export default Footer;
