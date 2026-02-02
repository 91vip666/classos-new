import desktopImage from "@/assets/images/desktop.png";
import "aos/dist/aos.css";
import { useEffect } from "preact/hooks";

const Desktop = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <div className="flex w-full flex-col items-center rounded-2xl border-2 border-[#303640] px-4 sm:px-6 md:px-12">
      <div
        className="pb-16"
        data-aos="fade-up"
      >
        <img
          src={desktopImage.src}
          alt="ClassOS 桌面界面演示"
          data-aos="zoom-in"
          className="w-full h-auto"
          loading="lazy"
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
