import { useState, useEffect } from "preact/hooks";
import logoImage from "@/assets/images/icons/logo_square.png";

interface VersionProps {
  latestVer: string | null;
  publishedDate: string | null;
  loading: boolean;
  size?: "auto"; // 新增 size 属性
}

const Version = ({ latestVer, publishedDate, loading, size }: VersionProps) => {
  const containerClasses = size === "auto"
    ? "w-full h-full flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg shadow-md border border-white/10"
    : "p-4 bg-white/5 rounded-lg shadow-md inline-flex items-center gap-4 border border-white/10";

  return (
    <a href="https://classwidgets.rinlit.cn/download/" target="_blank" rel="noopener noreferrer" className={containerClasses}>
      {loading ? (
        <span className="text-sm text-gray-400">正在获取最新版本信息...</span>
      ) : (
        <>
          <img
            src={logoImage.src}
            alt="ClassOS Logo"
            className="size-12"
          />
          <div className={size === "auto" ? "text-center" : ""}>
            <span className="text-lg font-semibold text-white block">最新版本: {latestVer}</span>
            {publishedDate && <span className="text-sm text-gray-400 block">发布日期: {publishedDate}</span>}
          </div>
        </>
      )}
    </a>
  );
};

export default Version;