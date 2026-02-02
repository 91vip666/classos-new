import bannerImage from "@/assets/images/backgrounds/banner.svg";
import logoImage from "@/assets/images/icons/logo_square.png";
import seewoLogo from "@/components/icon/SEEWO.png";
import hongheLogo from "@/components/icon/HONGHE.png";
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
    <div className="h-screen w-full overflow-hidden">
      <div
        className="relative h-full bg-cover bg-center bg-no-repeat text-white"
        style={{ 
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%), url(${bannerImage.src})` 
        }}
        data-aos="fade-right"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="ease-mobai-bounce max-w-8xl relative z-10 mx-auto flex h-full flex-col items-start justify-center gap-6 px-8 transition-all duration-500 md:gap-8 md:px-12 lg:px-16 xl:px-24">
          <img
            src={logoImage.src}
            alt="ClassOS 官方 Logo"
            className="ease-mobai-bounce size-24 transition-all duration-500 lg:size-32 xl:size-48 hover:scale-105 cursor-pointer filter drop-shadow-2xl"
            data-aos="zoom-in"
            loading="eager"
          />
          <div className="ease-mobai-bounce flex flex-col gap-6 transition-all duration-500 md:gap-8">
            <div className="ease-mobai-bounce flex flex-col gap-4 transition-all duration-500">
              <h1 
                data-aos="fade-up" 
                className="gradient-text text-4xl leading-[1.2] font-bold tracking-tight transition-all duration-500 md:text-5xl lg:text-6xl xl:text-7xl whitespace-pre-line"
              >
                {`向未来形态的教学系统\n说你好`}
              </h1>
              <p 
                className="text-gray-300 text-lg lg:text-xl max-w-2xl leading-relaxed transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                ClassOS 是一款专为教育场景打造的下一代教学操作系统。适配 Windows、希沃、鸿合等主流一体机，提供极致流畅与智能化的交互体验。
              </p>
            </div>
            <div className="ease-mobai-bounce flex flex-col gap-4 transition-all duration-500 md:flex-row md:gap-8">
              <div className="flex flex-col gap-4 md:flex-row">
                <Button
                  href="/download#win"
                  className="w-fit flex-row items-center gap-2 flex bg-white text-black"
                  data-aos="fade-left"
                >
                  <Windows className="size-6" />
                  <span className="text-lg lg:text-xl">下载 ClassOS</span>
                </Button>
                <TransparentButton
                  href="/download#seewo"
                  className="w-fit flex-row items-center flex"
                  data-aos="fade-left"
                >
                  <img src={seewoLogo.src} alt="希沃" className="h-10 w-auto" />
                </TransparentButton>
                <TransparentButton
                  href="/download#HiteVision"
                  className="w-fit flex-row items-center flex"
                  data-aos="fade-left"
                >
                  <img src={hongheLogo.src} alt="鸿合" className="h-8 w-auto" />
                </TransparentButton>
              </div>
              <div className="flex flex-row gap-4">
                <TransparentButton
                  href="/docs"
                  className="flex w-fit flex-row items-center gap-2"
                  data-aos="fade-up"
                >
                  <span className="text-lg lg:text-xl">文档</span>
                </TransparentButton>
                <TransparentButton
                  href="https://qm.qq.com/cgi-bin/qm/qr?authKey=C7JIQte%2B2z6j1lWlIMQixh%2FU26dkv0UD8jBVWfmwp3gZx%2BP4m%2BPbc4NHLVFTkjEc&k=7-bdHG5hLWUt0et0_rByLgf_hjPT622Z&noverify=0"
                  target="_blank"
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
