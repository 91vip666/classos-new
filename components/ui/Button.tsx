export const Button = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={`ease-mobai-bounce transform rounded-md px-4 py-2 transition-all duration-500 hover:scale-105 lg:px-6 lg:py-4 ${className || 'bg-white text-black'}`}
    >
      {children}
    </a>
  );
};

export const TransparentButton = ({
  children,
  href,
  className,
  target,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
}) => {
  return (
    <a
      href={href}
      target={target}
      className={`ease-mobai-bounce transform rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 lg:px-6 lg:py-4 ${className}`}
    >
      {children}
    </a>
  );
};
