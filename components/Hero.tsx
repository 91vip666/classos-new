import bannerImage from "@/assets/images/backgrounds/banner.svg";
import logoImage from "@/assets/images/icons/logo_square.png";
import Apple from "@/components/icon/Apple";
import Linux from "@/components/icon/Linux";
import Windows from "@/components/icon/Windows";
import { Button, TransparentButton } from "@/components/ui/Button";
import "aos/dist/aos.css";
import { useEffect } from "preact/hooks";

const Hero = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <div className="h-screen w-full">
      <div
        className="relative h-full bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${bannerImage.src})` }}
        data-aos="fade-right"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="ease-mobai-bounce max-w-8xl relative z-10 mx-auto flex h-full flex-col items-start justify-center gap-4 px-8 transition-all duration-500 md:gap-8 md:px-12 lg:px-16 xl:px-24">
          <img
            src={logoImage.src}
            alt="logo"
            className="ease-mobai-bounce size-24 transition-all duration-500 lg:size-32 xl:size-48"
            data-aos="zoom-in"
          />
          <div className="ease-mobai-bounce flex flex-col gap-4 transition-all duration-500 md:gap-8">
            <div className="ease-mobai-bounce gap-4 text-3xl leading-snug font-semibold whitespace-pre-line transition-all duration-500 lg:text-4xl xl:text-5xl">
              <h1 data-aos="fade-up">{`多样的桌面课表\n由我们定义的全新桌面形态`}</h1>
            </div>
            <div className="ease-mobai-bounce flex flex-col gap-4 transition-all duration-500 md:flex-row md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row">
                <Button
                  href="/download#win"
                  className="w-fit flex-row items-center gap-2 flex"
                  data-aos="fade-left"
                >
                  <Windows className="size-6" />
                  <span className="text-lg lg:text-xl">下载 Class Widgets</span>
                </Button>
                <TransparentButton
                  href="/download#macos"
                  className="hidden w-fit flex-row items-center gap-2 lg:flex"
                  data-aos="fade-left"
                >
                  <Apple className="size-6" />
                </TransparentButton>
                <TransparentButton
                  href="/download#linux"
                  className="hidden w-fit flex-row items-center gap-2 lg:flex"
                  data-aos="fade-left"
                >
                  <Linux className="size-6" />
                </TransparentButton>
              </div>
              <div className="flex flex-row gap-4">
                <TransparentButton
                  href="/user_docs"
                  className="flex w-fit flex-row items-center gap-2"
                  data-aos="fade-up"
                >
                  <span className="text-lg lg:text-xl">文档</span>
                </TransparentButton>
                <TransparentButton
                  href="https://www.yuque.com/rinlit/standards"
                  className="flex w-fit flex-row items-center gap-2"
                  data-aos="fade-up"
                >
                  <span className="text-lg lg:text-xl">社区</span>
                </TransparentButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
