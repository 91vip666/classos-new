import { useState, useEffect } from "preact/hooks";

interface FadeInDivProps {
  children: preact.ComponentChildren;
}

const FadeInDiv = ({ children }: FadeInDivProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInDiv;