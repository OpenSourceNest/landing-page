const Sprint26Share = () => {
  return (
    <section className="section bg-black">
      <div className="constraint bg-[#0d0d0d] border-2 border-white flex gap-10 p-10 max-[1000px]:flex-col">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-primary text-[20px]">{">_SHARE THE WORD"}</p>
            <p className="font-bold text-[36px] text-white leading-tight">
              ONE REPOST FILLS
              <br />A MAINTAINER&apos;S QUEUE
            </p>
          </div>
          <p className="text-white/80 text-[20px]">
            Sprint 26 runs on word of mouth. Post the link, tag a maintainer
            sitting on a backlog, or drop it in your team channel.
          </p>
          <div className="flex gap-3">
            <button className="bg-primary text-black font-semibold px-8 py-5 cursor-pointer">
              Share on X
            </button>
            <button className="bg-black border border-[#a7ffc9] text-white font-semibold px-8 py-5 cursor-pointer">
              Copy Link
            </button>
          </div>
        </div>

        <div className="flex-1 bg-black border border-[#282828] p-8 font-mono text-[16px] flex flex-col justify-center">
          <p className="text-[#828282]">$ npx sprint26 --share</p>
          <p className="text-[#a9ffb7]">{">"} copying invite…</p>
          <p className="text-[#a9ffb7]">{">"} 5 weeks. 68 repos.</p>
          <p className="text-[#a9ffb7]">{">"} zero spam PRs.</p>
          <p className="text-[#a9ffb7]">{">"} link copied ✓</p>
        </div>
      </div>
    </section>
  );
};

export default Sprint26Share;
