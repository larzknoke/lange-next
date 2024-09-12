import { useState, useEffect } from "react";

function Scroller() {
  const [panPosition, setPanPosition] = useState("70%");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollerWidth = () => {
      const scrollPosition =
        (window.scrollY /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;

      setPanPosition(scrollPosition);
      setIsScrolling(true);
      // setTimeout(() => {
      //   setIsScrolling(false);
      // }, 1000);
      // if (scrollPosition > 50) {
      // } else {
      //   setIsScrolling(false);
      // }
    };

    window.addEventListener("scroll", scrollerWidth);

    return () => window.removeEventListener("scroll", scrollerWidth);
  }, []);
  return (
    <div className={`scroller ${isScrolling ? "scrolling" : ""}`}>
      <img
        className="scroller-top"
        src="/images/lange/scroller/scroller-hor-start.svg"
        alt=""
      />
      <div
        className="scroller-middle"
        style={{ width: `${panPosition}vw` }}
      ></div>
      <img src="/images/lange/scroller/scroller-hor-end.svg" alt="" />
      <img className="pan" src="/images/lange/scroller/pan-hor.svg" alt="" />
    </div>
  );
}

export default Scroller;
