import { Button, TransparentButton } from "./ui/Button";
import AOS from "aos";
import { useEffect } from "preact/hooks";

// 文档卡片组件
interface DocCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  animation: string;
  icon: JSX.Element;
  colorTo?: string;
}

function DocCard({ title, description, features, buttonText, buttonHref, animation, icon, colorTo = "#3b82f6" }: DocCardProps) {
  return (
    <div 
      className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-4 group"
      data-aos={animation}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
            <div className="w-6 h-6 text-white">
              {icon}
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white transition-colors duration-500">{title}</h2>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed transition-colors duration-500">
          {description}
        </p>
        
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors duration-500">
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <Button
            href={buttonHref}
            className="w-full justify-center bg-white text-black hover:scale-[1.02] transition-transform duration-300"
          >
            <span className="text-lg font-medium">{buttonText}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

const Docs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-mobai-background text-mobai-foreground">
      <div className="max-w-8xl mx-auto px-8 py-24 md:px-12 lg:px-16 xl:px-24">
        {/* 页面标题 */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">文档中心</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            探索 ClassOS 的完整功能，从基础使用到高级开发，我们为您提供详尽的文档指南
          </p>
        </div>

        {/* 文档卡片网格 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-20">
          {/* 用户文档卡片 */}
          <DocCard
            title="用户文档"
            description="快速上手 ClassOS，了解基本功能和操作指南。包含安装教程、界面介绍、常用功能说明和故障排除等内容。"
            features={["快速入门指南", "功能使用说明", "常见问题解答"]}
            buttonText="查看完整用户文档"
            buttonHref="https://bcnaugqxbog0.feishu.cn/wiki/C8lzwSyrjilFBxkTcPyckgsCn3g"
            animation="fade-right"
            colorTo="#3b82f6"
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          />

          {/* 开发者文档卡片 */}
          <DocCard
            title="开发者文档"
            description="深入了解 ClassOS 的技术架构，学习如何为 ClassOS 开发插件和扩展功能。包含 API 参考、开发环境搭建和最佳实践。"
            features={["API 接口文档", "插件开发指南", "技术架构说明"]}
            buttonText="查看完整开发者文档"
            buttonHref="https://bcnaugqxbog0.feishu.cn/wiki/FoyywT7ffiZDqzktVaSctdhXn1e"
            animation="fade-left"
            colorTo="#a855f7"
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />
        </div>

        {/* 快速入门预览 */}
        <div className="max-w-6xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-8">快速上手指南</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "下载系统", desc: "前往下载页面，选择适配您设备的 ClassOS 镜像文件。" },
              { step: "02", title: "制作启动盘", desc: "使用 Ventoy 或 Rufus 将镜像写入 U 盘。" },
              { step: "03", title: "安装部署", desc: "从 U 盘启动设备，按照向导完成 ClassOS 的安装。" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <span className="text-4xl font-black text-white/10 mb-4 block">{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 需要帮助？ */}
         <div 
           className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 ease-out mt-16 max-w-6xl mx-auto"
           data-aos="fade-up"
         >
          <h3 className="text-2xl font-bold text-white mb-4">需要帮助？</h3>
          <p className="text-gray-400 mb-6">
            如果您在使用过程中遇到问题，或者有任何建议，欢迎联系我们的技术支持团队
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransparentButton 
              href="mailto:support@classos.com"
              className="hover:bg-white/10"
            >
              发送邮件
            </TransparentButton>
            <TransparentButton 
              href="https://github.com/ClassOS/ClassOS/issues"
              className="hover:bg-white/10"
            >
              提交问题
            </TransparentButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
