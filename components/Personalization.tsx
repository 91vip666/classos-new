import personalizationImage from "@/assets/images/personalization.png";

const Personalization = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
      <div className="flex flex-col justify-center gap-6" data-aos="fade-right">
        
        <h1
          className="ease-mobai-bounce text-2xl leading-snug font-semibold whitespace-pre-line transition-all duration-500 lg:gap-4 lg:text-3xl xl:gap-8 xl:text-4xl"
          data-aos="fade-up"
        >
          {`课表软件\nClass Widgets`}
        </h1>
        <p
          className="text-md leading-tight text-[#87878A] xl:text-lg"
          data-aos="fade-up"
        >
          在 ClassOS 中，提供了基于 Python
          的Class Widgets；ClassOS 致力于提供高度的自定义选项，使每位电教能在安装镜像后再对系统进行一些定制。
        </p>
      </div>
      <div className="rounded-lg border-2 border-[#303640]" data-aos="fade-left">
        <img
          src={personalizationImage.src}
          alt="theme&plugin"
          className="h-fit w-full"
        />
      </div>
    </div>
  );
};

export default Personalization;
