import bannerImage from "@/assets/images/backgrounds/banner.svg";
import logoImage from "@/assets/images/icons/logo_square.png";
import hongheIcon from "@/components/icon/HONGHE.png";
import seewoIcon from "@/components/icon/SEEWO.png";
import Windows from "@/components/icon/Windows";
import { Button, TransparentButton } from "@/components/ui/Button";
const Hero = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="relative h-full bg-cover bg-center bg-no-repeat text-white contrast-125 saturate-125"
        style={{ backgroundImage: `url(${bannerImage.src})` }}
        data-aos="fade-right"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="ease-mobai-bounce max-w-8xl relative z-10 mx-auto flex h-full flex-col items-start justify-center gap-4 px-8 transition-all duration-500 md:gap-8 md:px-12 lg:px-16 xl:px-24">
          <img
            src={logoImage.src}
            alt="logo"
            className="ease-mobai-bounce size-24 transition-all duration-500 lg:size-32 xl:size-48"
            data-aos="zoom-in"
          />
          <div className="ease-mobai-bounce flex flex-col gap-4 transition-all duration-500 md:gap-8">
            <div className="ease-mobai-bounce gap-4 text-3xl leading-snug font-semibold whitespace-pre-line transition-all duration-500 lg:text-4xl xl:text-5xl">
              <h1 data-aos="fade-up">{`向未来形态的教学系统\n说你好`}</h1>
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
                  <img src={seewoIcon.src} alt="SEEWO" className="h-10 w-auto" />
                </TransparentButton>
                <TransparentButton
                  href="/download#HiteVision"
                  className="w-fit flex-row items-center flex"
                  data-aos="fade-left"
                >
                  <img src={hongheIcon.src} alt="HONGHE" className="h-8 w-auto" />
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
