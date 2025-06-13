import type { SVGProps } from "preact/compat";

function Linux(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 300 100"
      {...props}
    >
      <g>
        <rect x="10" y="20" width="60" height="60" rx="10" fill="#E53E3E" />
        <text x="40" y="55" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">鸿</text>
        <rect x="80" y="20" width="60" height="60" rx="10" fill="#E53E3E" />
        <text x="110" y="55" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">合</text>
        <text x="160" y="40" font-family="Arial, sans-serif" font-size="14" font-weight="normal" fill="#2D3748">HiteVision</text>
        <text x="160" y="60" font-family="Arial, sans-serif" font-size="12" font-weight="normal" fill="#718096">智慧教育解决方案</text>
      </g>
    </svg>
  );
}

export default Linux;
