import { Block } from "@/components/ui/Block";
import { Button, TransparentButton } from "@/components/ui/Button";
import "aos/dist/aos.css";
import { useEffect } from "preact/hooks";

const Docs = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#11121C] text-white">
      <div className="max-w-8xl mx-auto flex flex-col gap-16 py-24 px-8 md:px-12 lg:px-16 xl:px-24">
        {/* 页面标题 */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-cyan-300 hover:to-purple-400 transition-all duration-1000 ease-out cursor-default">
            文档中心
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-500 ease-out cursor-default">
            探索 ClassOS 的完整功能，从基础使用到高级开发，我们为您提供全面的文档支持
          </p>
        </div>

        {/* 文档卡片区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 用户文档卡片 */}
          <div 
            className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8 lg:p-10 backdrop-blur-sm hover:border-blue-400/60 hover:from-blue-500/20 hover:to-blue-600/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-out"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110">
                  <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-500 ease-out">用户文档</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-all duration-500 ease-out">
                快速上手 ClassOS，了解基本功能和操作指南。包含安装教程、界面介绍、常用功能说明和故障排除等内容。
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-out">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-all duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>快速入门指南</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-out delay-75">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-all duration-300 ease-out delay-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>功能使用说明</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-out delay-150">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-all duration-300 ease-out delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>常见问题解答</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="group/button">
                  <Button
                    href="https://bcnaugqxbog0.feishu.cn/wiki/C8lzwSyrjilFBxkTcPyckgsCn3g"
                    className="w-full justify-center bg-blue-500 hover:bg-blue-600 text-white group-hover/button:shadow-lg group-hover/button:shadow-blue-500/30 group-hover/button:scale-[1.02] transition-all duration-300 ease-out"
                  >
                    <span className="text-lg group-hover/button:scale-105 transition-transform duration-300 ease-out">查看用户文档</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 开发者文档卡片 */}
          <div 
            className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 lg:p-10 backdrop-blur-sm hover:border-purple-400/60 hover:from-purple-500/20 hover:to-purple-600/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 ease-out"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 group-hover:bg-purple-500/30 rounded-xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110">
                  <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-all duration-500 ease-out">开发者文档</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-all duration-500 ease-out">
                深入了解 ClassOS 的技术架构，学习如何为 ClassOS 开发插件和扩展功能。包含 API 参考、开发环境搭建和最佳实践。
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-out">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-all duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>API 接口文档</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-out delay-75">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-all duration-300 ease-out delay-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>插件开发指南</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-out delay-150">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-all duration-300 ease-out delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>技术架构说明</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="group/button">
                  <Button
                    href="https://bcnaugqxbog0.feishu.cn/wiki/FoyywT7ffiZDqzktVaSctdhXn1e"
                    className="w-full justify-center bg-purple-500 hover:bg-purple-600 text-white group-hover/button:shadow-lg group-hover/button:shadow-purple-500/30 group-hover/button:scale-[1.02] transition-all duration-300 ease-out"
                  >
                    <span className="text-lg group-hover/button:scale-105 transition-transform duration-300 ease-out">查看开发者文档</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部额外信息 */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="group/help bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 rounded-2xl p-8 backdrop-blur-sm hover:from-gray-700/60 hover:to-gray-600/60 hover:border-gray-500/50 hover:shadow-xl hover:shadow-gray-500/10 transition-all duration-500 ease-out hover:scale-[1.01]">
            <h3 className="text-2xl font-bold mb-4 text-gray-200 group-hover/help:text-gray-100 transition-colors duration-300 ease-out">需要帮助？</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto group-hover/help:text-gray-300 transition-colors duration-300 ease-out">
              如果您在使用过程中遇到问题，或者有任何建议和反馈，欢迎加入我们的社区进行交流讨论。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="group/community">
                <TransparentButton
                  href="https://qm.qq.com/cgi-bin/qm/qr?authKey=C7JIQte%2B2z6j1lWlIMQixh%2FU26dkv0UD8jBVWfmwp3gZx%2BP4m%2BPbc4NHLVFTkjEc&k=7-bdHG5hLWUt0et0_rByLgf_hjPT622Z&noverify=0"
                  target="_blank"
                  className="flex items-center justify-center gap-2 group-hover/community:shadow-md group-hover/community:shadow-blue-400/20 group-hover/community:scale-105 transition-all duration-300 ease-out"
                >
                  <svg className="w-5 h-5 group-hover/community:rotate-12 transition-transform duration-300 ease-out" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="group-hover/community:scale-105 transition-transform duration-300 ease-out">加入社区</span>
                </TransparentButton>
              </div>
              <div className="group/github">
                <TransparentButton
                  href="https://github.com/Class-Widgets/Class-Widgets"
                  target="_blank"
                  className="flex items-center justify-center gap-2 group-hover/github:shadow-md group-hover/github:shadow-purple-400/20 group-hover/github:scale-105 transition-all duration-300 ease-out"
                >
                  <svg className="w-5 h-5 group-hover/github:rotate-12 transition-transform duration-300 ease-out" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="group-hover/github:scale-105 transition-transform duration-300 ease-out">GitHub</span>
                </TransparentButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;