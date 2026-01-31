import { useState, useEffect, useRef } from "preact/hooks";
import Apple from "@/components/icon/Apple";
import Linux from "@/components/icon/Linux";
import Windows from "@/components/icon/Windows";
import logoImage from "@/assets/images/icons/logo_square.png";
import Version from "@/components/ui/Version";

const Download = () => {
  const [activeTab, setActiveTab] = useState("windows");
  const [activeIndex, setActiveIndex] = useState(0); // 添加滑动索引状态
  const [sliderPosition, setSliderPosition] = useState({
    width: 0,
    left: 0,
    top: 0,
    height: 0
  });
  const tabsRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false); // 新增状态

  // 添加哈希值到平台ID的映射
  const hashToPlatform: Record<string, string> = {
    '#win': 'windows',
    '#seewo': 'seewo',
    '#HiteVision': 'HiteVision'
  };

  // 更新滑块位置
  const updateSliderPosition = (platformId: string) => {
    if (!tabsRef.current) return;
    
    const activeButton = tabsRef.current.querySelector(`button[data-platform="${platformId}"]`);
    if (!activeButton) return;
    
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeButton as HTMLButtonElement;
    setSliderPosition({
      left: offsetLeft,
      top: offsetTop,
      width: offsetWidth,
      height: offsetHeight
    });
  };

  // 监听URL哈希变化
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const platformId = hashToPlatform[hash];
      if (platformId) {
        setActiveTab(platformId);
      }
    };

    // 初始加载时检查哈希
    handleHashChange();

    // 添加哈希变化监听
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    setLoaded(true); // 组件挂载后触发动画
  }, []);

  // 初始化滑块位置
  useEffect(() => {
    updateSliderPosition(activeTab);
    const handleResize = () => updateSliderPosition(activeTab);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);



  const platforms = [
    { id: "windows", name: "PC", icon: Windows },
    { id: "seewo", name: "SEEWO", icon: Apple },
    { id: "HiteVision", name: "鸿合", icon: Linux },
  ];
  
  // 根据activeTab更新activeIndex
  useEffect(() => {
    const index = platforms.findIndex(p => p.id === activeTab);
    setActiveIndex(index);
  }, [activeTab]);

  const getDownloadUrl = (baseUrl: string) => {
    return baseUrl;
  };

  const downloadData = {
    seewo: {
      title: "ClassOS_SEEWO下载",
      description: "一定要按照机型装啊喂！",
      downloads: [
        {
          name: "MT71A",
          type: "x64",
          url: getDownloadUrl(`https://pan.quark.cn/s/a8534e34adc9`)
        },
        {
          name: "MT41A",
          type: "x64",
          url: getDownloadUrl(`https://pan.quark.cn/s/601e7d9c1012`)
        },
        {
          name: "MT23",
          type: "x64",
          url: getDownloadUrl(`https://pan.quark.cn/s/479a597885d0`)
        }
      ]
    },
    windows: {
      title: "ClassOS_PC下载",
      description: "emm PC系列或许达到对应系统的最低要求就能用",
      downloads: [
        {
          name: "ClassOS 10",
          type: "x64",
          url: getDownloadUrl(`https://pan.quark.cn/s/7de82283aa31`)
        },
        {
          name: "ClassOS 7",
          type: "x86",
          url: getDownloadUrl(`https://pan.quark.cn/s/50e30a915649`)
        },
        {
          name: "ClassOS 11_LTSC_2025",
          type: "x64",
          url: getDownloadUrl(`https://pan.quark.cn/s/bffa6951bbc8`)
        }
      ]
    },
    HiteVision: {
      title: "ClassOS_鸿合下载",
      description: "或许鸿合就这一个版本",
      downloads: [
        {
          name: "标准版",
          type: "Win10+Win11 x64",
          url: getDownloadUrl(`https://pan.quark.cn/s/f7b95e53255e`)
        }
      ]
    }
  };

  const currentPlatform = downloadData[activeTab as keyof typeof downloadData];

  return (
    <div className={`min-h-screen bg-mobai-background text-mobai-foreground transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-6xl mx-auto px-8 py-16 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">下载 ClassOS</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            下载 ClassOS 系统以在您的设备上使用。我们提供了适用于不同电脑的系列与版本，确保您可以在任何情况下享受我们的系统。
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="mb-12">
          <div ref={tabsRef} className="flex flex-wrap gap-2 bg-white/5 rounded-xl p-2 w-fit relative">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <button
                  key={platform.id}
                  onClick={() => {
                    setActiveTab(platform.id);
                    // 使用replaceState更新URL哈希，避免产生历史记录
                    const hash = platform.id === 'windows' ? 'win' : platform.id;
                    history.replaceState(null, '', `#${hash}`);
                  }}
                  data-platform={platform.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 relative z-10 ${
                    activeTab === platform.id
                      ? "text-black"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <IconComponent className="size-5" />
                  <span className={`font-medium ${activeTab !== platform.id ? 'hidden md:block' : ''}`}>{platform.name}</span>
                </button>
              );
            })}
            <div
              className="absolute rounded-lg bg-white transition-all duration-300 z-0"
              style={{
                left: `${sliderPosition.left}px`,
                top: `${sliderPosition.top}px`,
                width: `${sliderPosition.width}px`,
                height: `${sliderPosition.height}px`
              }}
            />
          </div>
        </div>

        {/* Download Section - 改为滑动切换 */}
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <div className="flex items-start justify-between">
            <div className="flex-1 overflow-hidden">
              {/* 滑动容器 */}
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {platforms.map(platform => {
                  const platformData = downloadData[platform.id as keyof typeof downloadData];
                  return (
                    <div key={platform.id} className="w-full flex-shrink-0">
                      <div className="flex items-center gap-3 mb-4">
                        <platform.icon className="size-8 text-white" />
                        <h2 className="text-3xl font-semibold text-white">{platformData.title}</h2>
                      </div>
                      
                      <p className="text-gray-300 mb-8 whitespace-pre-line leading-relaxed">
                        {platformData.description}
                      </p>

                      {/* Download Options */}
                      <div className="space-y-4">
                        {platformData.downloads.map((download, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-white">{download.name}</span>
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                      {download.type}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href={download.url}
                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
              >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下载
              </a>
            </div>
          ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* App Icon */}
            <div className="ml-8 hidden lg:block">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-white/10">
                <img
                  src={logoImage.src}
                  alt="ClassOS"
                  className="size-32 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            需要帮助？前往我们的{" "}
            <a href="https://github.com/Class-Widgets/Class-Widgets">
              Github
            </a>{" "}
            或者加入{" "}
            <a href="https://github.com/orgs/Class-Widgets/discussions">
              社群
            </a>
          </p>
          <p className="text-sm text-gray-500">
            所有下载均经过数字签名和安全验证
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
