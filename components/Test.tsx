import { Block } from "@/components/ui/Block";

const Test = () => {
  return (
    <div className="max-w-8xl mx-auto" data-aos="fade-up">
      <div className="grid gap-24 md:grid-cols-3">
        <Block
          colorTo="#c44569"
          title="增强了Windows的性能"
          content="ClassOS 对性能设置方面重点关注，确保低配置电脑及一体机也能流畅使用课件功能[不同系列针对的配置不同]。"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <Block
          colorTo="#44a08d"
          title="课件与软件"
          content="ClassOS 中内置了WPS或Microsoft Office365等办公软件，重装完即可无缝上课。"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Block
          colorTo="#fed6e3"
          title="实用工具"
          content="ClassOS 内置了PotPlayer和Bandizip以及IDM等实用软件。"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default Test;