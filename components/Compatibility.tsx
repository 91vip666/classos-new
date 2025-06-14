import seewoImage from "@/assets/images/screenshots/macos.png";
import win7Image from "@/assets/images/screenshots/win7.png";
import win11Image from "@/assets/images/screenshots/win11.png";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "preact/hooks";

const Compatibility = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  const rawScreenshots = [win11Image,  win7Image, seewoImage].map(
    (it) => it.src,
  );
  const screenshots = [
    rawScreenshots[rawScreenshots.length - 1], // Last image
    ...rawScreenshots,
    rawScreenshots[0], // First image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at the first real image
  const intervalRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);
  const [isJumping, setIsJumping] = useState(false); // State to control instant jump
  const [isAnimating, setIsAnimating] = useState(false); // New state to prevent rapid clicks

  const transitionDuration = 500; // Must match CSS transition duration

  // 启动自动轮播
  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, 3000);
  };

  // 停止自动轮播
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 切换到下一张
  const goToNext = () => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true); // Start animation
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  // 切换到上一张
  const goToPrev = () => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true); // Start animation
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  // 处理手动切换
  const handleManualChange = (direction: "prev" | "next") => {
    stopAutoPlay();
    if (direction === "prev") {
      goToPrev();
    } else {
      goToNext();
    }
    // 手动切换后立即重启轮播（如果不在悬停状态）
    if (!isHoveringRef.current) {
      startAutoPlay();
    }
  };


  // 处理循环跳转和动画结束
  useEffect(() => {
    let timer: number;
    // This setTimeout handles the duration of the visual slide animation
    timer = window.setTimeout(() => {
      // After the slide animation, check if a jump is needed
      if (currentImageIndex === screenshots.length - 1) {
        setIsJumping(true); // Disable transition for the jump
        setCurrentImageIndex(1); // Jump to the real first image
      } else if (currentImageIndex === 0) {
        setIsJumping(true); // Disable transition for the jump
        setCurrentImageIndex(screenshots.length - 2); // Jump to the real last image
      }
      // In any case, after the slide (or potential jump), animation is considered done
      setIsAnimating(false);
    }, transitionDuration);

    return () => window.clearTimeout(timer);
  }, [currentImageIndex, screenshots.length]);

  // Re-enable transition after jumping
  useEffect(() => {
    if (isJumping) {
      // Use requestAnimationFrame to ensure the state update for setIsJumping(false) happens after the DOM has rendered the jump
      requestAnimationFrame(() => {
        setIsJumping(false);
      });
    }
  }, [isJumping]);


  useEffect(() => {
    startAutoPlay(); // 初始启动自动轮播
    return () => {
      stopAutoPlay(); // 组件卸载时清理
    };
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
      <div
        className="order-2 aspect-video min-h-[200px] w-full overflow-hidden rounded-lg border-2 border-[#303640] lg:order-1 relative"
        data-aos="fade-right"
        onMouseEnter={() => {
          stopAutoPlay();
          isHoveringRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveringRef.current = false;
          startAutoPlay();
        }}
      >
        {/* 滑动容器 */}
        <div
          className="flex h-full ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: isJumping ? 'none' : `transform ${transitionDuration}ms ease-in-out`,
          }}
        >
          {screenshots.map((src, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={src}
                className="ease-mobai-standard h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* 左右滑动按钮 */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full p-2 text-white z-10"
          onClick={() => handleManualChange("prev")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full p-2 text-white z-10"
          onClick={() => handleManualChange("next")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div
        className="order-1 flex flex-col justify-center gap-6 lg:order-2"
        data-aos="fade-left"
      >
        
        <h1
          className="ease-mobai-bounce text-2xl leading-snug font-semibold whitespace-pre-line transition-all duration-500 lg:gap-4 lg:text-3xl xl:gap-8 xl:text-4xl"
          data-aos="fade-up"
        >
          {`支持了绝大部分\n主流教学主机及品牌机`}
        </h1>
        <p
          className="text-md leading-tight text-[#87878A] xl:text-lg"
          data-aos="fade-up"
        >
          {`ClassOS 支持Windows 7 , 10 , 11的台式机及希沃及鸿合等品牌机`}
        </p>
      </div>
    </div>
  );
};

export default Compatibility;
