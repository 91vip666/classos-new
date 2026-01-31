import desktopImage from "@/assets/images/desktop.png";

const Desktop = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl border-2 border-[#303640] px-4 sm:px-6 md:px-12">
      <div
        className="pb-16"
        data-aos="fade-up"
      >
        <img
          src={desktopImage.src}
          data-aos="zoom-in"
          className="w-full h-auto"
        />
        <p
          className="ease-mobai-bounce flex flex-row justify-center gap-2 text-xl font-semibold transition-all duration-500 md:text-2xl lg:gap-4 lg:text-3xl xl:gap-8 xl:text-4xl"
          data-aos="fade-down"
        >
          <span>向<span className="gradient-text">智能化</span>的教学系统 说你好</span>
        </p>
      </div>
    </div>
  );
};

export default Desktop;
