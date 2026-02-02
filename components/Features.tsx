import { useEffect } from "preact/hooks";
import "aos/dist/aos.css";

const features = [
  {
    title: "卓越的兼容性",
    description: "完美适配 Windows 7、10、11 系统，并针对希沃（SEEWO）、鸿合（HiteVision）等主流教学一体机进行深度优化。",
    icon: (
      <svg className="size-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500/20 to-blue-600/5"
  },
  {
    title: "极致性能优化",
    description: "专为低配置教学设备打造，优化后台资源调度，确保在课件演示和多任务并行时依然保持丝滑流畅。",
    icon: (
      <svg className="size-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-green-500/20 to-green-600/5"
  },
  {
    title: "全能软件生态",
    description: "内置 Office 365、WPS、IDM、PotPlayer 等常用教学与办公工具，开机即用，无需额外配置。",
    icon: (
      <svg className="size-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-600/5"
  },
  {
    title: "智能课表交互",
    description: "集成基于 Python 的 Class Widgets 课表组件，支持高度自定义，让桌面既美观又实用。",
    icon: (
      <svg className="size-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-orange-500/20 to-orange-600/5"
  },
  {
    title: "极简纯净体验",
    description: "彻底告别系统广告与冗余预装，还原最纯净的教学环境，让教师专注于教学本身。",
    icon: (
      <svg className="size-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-red-500/20 to-red-600/5"
  },
  {
    title: "自动化部署",
    description: "支持批量静默安装与自动化配置，大幅降低电教管理人员的维护成本与系统部署时间。",
    icon: (
      <svg className="size-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "from-cyan-500/20 to-cyan-600/5"
  }
];

const Features = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            为什么选择 <span className="gradient-text">ClassOS</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            我们深入理解教育场景的痛点，通过技术创新，为学校提供更稳定、更高效、更智能的系统解决方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group p-8 rounded-3xl bg-gradient-to-br ${feature.color} border border-white/10 hover:border-blue-500/50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-blue-500/10`}
            >
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
