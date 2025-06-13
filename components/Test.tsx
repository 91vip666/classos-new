import "aos/dist/aos.css";
import { useEffect } from "preact/hooks";
import { Block } from "@/components/ui/Block";

const Test = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <div className="max-w-8xl mx-auto" data-aos="fade-up">
      <div className="grid gap-24 md:grid-cols-3">
        <Block
          tag="通知"
          colorFrom="#ff6b9d"
          colorTo="#c44569"
          title="强大的通知系统"
          content="提供了强大的通知系统，能够在上下课等时间点推出提醒；此外，插件也可调用通知接口，使其更加实用。"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <Block
          tag="浮窗"
          colorFrom="#4ecdc4"
          colorTo="#44a08d"
          title="全新的隐藏方式"
          content="全新隐藏方式——浮窗，能够让 Class Widgets 的重要信息浓缩为一块浮动的窗口，更轻巧便捷。尽量减小其对教学工作的干扰。"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Block
          tag="设计"
          colorFrom="#a8edea"
          colorTo="#fed6e3"
          title="极致的设计语言"
          content="Class Widgets 采用了由微软推出的 Fluent Design 设计语言，使界面更加简洁、舒适和流畅，且使用了 QFluentWidgets UI库。"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default Test;
