export const Block = ({
  tag,
  colorFrom,
  colorTo,
  title,
  content,
}: {
  tag?: string;
  colorFrom?: string;
  colorTo?: string;
  title?: string;
  content?: string;
}) => {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-8 bg-[#11121C]">
      <p
        className="bg-clip-text text-lg font-semibold text-transparent"
        style={{
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        # {tag}
      </p>
      <h1 className="ease-mobai-bounce flex flex-col gap-2 text-2xl font-semibold transition-all duration-500 lg:gap-4 lg:text-3xl xl:gap-8 xl:text-4xl">
        <span>{title}</span>
      </h1>
      <p className="text-md leading-tight text-[#87878A] xl:text-lg">
        {content}
      </p>
    </div>
  );
};
