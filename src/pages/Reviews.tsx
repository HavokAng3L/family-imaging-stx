import { FC, useRef, useEffect } from "react";

const Reviews: FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = document.createElement("div");
    container.id = `shapo-widget-78a91323852d47271d36`;
    wrapperRef.current?.appendChild(container);

    if (!document.getElementById("shapo-embed-js")) {
      const script = document.createElement("script");
      script.id = "shapo-embed-js";
      script.src = "https://cdn.shapo.io/js/embed.js";
      script.defer = true;
      document.body.appendChild(script);
    }
    return () => {
      wrapperRef.current?.replaceChildren();
    };
  }, []);

  return <div ref={wrapperRef} />;
};

export default Reviews;
