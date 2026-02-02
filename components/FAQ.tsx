import { useState, useEffect } from "preact/hooks";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "ClassOS 是什么？它与普通 Windows 有什么区别？",
    answer: "ClassOS 是基于 Windows 定制的专为教育场景设计的教学操作系统。它在保留 Windows 兼容性的基础上，去除了系统广告与冗余组件，集成了常用的教学工具和自动化配置，并针对教学一体机的硬件特点进行了深度优化。"
  },
  {
    question: "ClassOS 支持哪些设备安装？",
    answer: "ClassOS 具有极佳的兼容性。它支持市面上绝大部分 Windows 台式机、笔记本，并特别适配了希沃（SEEWO）、鸿合（HiteVision）等主流品牌的教学一体机。我们为不同性能的硬件提供了不同的内核版本供选择。"
  },
  {
    question: "安装 ClassOS 会导致原本的课件丢失吗？",
    answer: "系统安装本质上是重装系统的过程。在安装前，我们强烈建议您备份重要课件和数据。安装完成后，您可以使用内置的 Office 或 WPS 无缝打开您的原有课件。"
  },
  {
    question: "ClassOS 是免费的吗？",
    answer: "是的，ClassOS 是一款非营利性的开源/社区项目。您可以免费下载并安装使用。如果您觉得我们的项目对您有帮助，欢迎在 GitHub 上为我们点亮 Star。"
  },
  {
    question: "遇到技术问题如何获得支持？",
    answer: "您可以访问我们的文档中心查看常见问题解答。如果问题仍未解决，可以加入我们的 QQ 交流群或在 GitHub Issues 中提交反馈，我们的社区成员和开发者会为您提供帮助。"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black/20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            常见问题 <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-gray-400 text-lg">
            如果您在安装或使用过程中遇到疑问，可以在这里找到快速解答。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`size-6 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
