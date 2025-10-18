import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div
        className="constraint flex items-center justify-between gap-4
      py-[56px] px-[70px] max-[700px]:flex-wrap-reverse max-[700px]:justify-center"
      >
        <Image
          src="/images/logo-full.png"
          alt="OpenSourceNest Logo"
          height={52}
          width={212}
        />

        <p className="opacity-60 text-base text-center">
          All rights resevered. Product of OSN{new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
