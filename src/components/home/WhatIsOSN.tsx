import SectionTitle from "./SectionTitle";

const WhatIsOSN = () => {
  return (
    <section className="section py-[100px] w-full">
      <div className="constraint flex flex-col items-center text-center">
        <SectionTitle title="ABOUT OSN" />

        <p className="font-semibold text-[40px] mt-5 text-center">
          What is Open Source Nest?
        </p>

        <p className="text-base opacity-80 mt-8 mb-2.5">
          Open Source Nest (OSN) is a community-first initiative dedicated to
          making open source software truly accessible, welcoming, and
          sustainable for everyday people — especially beginners, students, and
          those who feel excluded from the traditional tech/open-source world.
          Launched independently in August 2025, OSN exists to lower every
          possible barrier to participation in open source. Whether someone
          wants to contribute code, write documentation, design interfaces,
          collect data, manage communities, or simply learn how to use
          open-source tools in their daily life.
        </p>

        <p className="text-lg text-primary3 font-semibold ">
          We believe open source is more than code, it&apos;s a movement of
          inclusion, innovation, and empowerment.
        </p>
      </div>
    </section>
  );
};

export default WhatIsOSN;
