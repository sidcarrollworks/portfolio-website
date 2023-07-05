import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  hovered?: any;
}

const Balloons = ({ hovered }: Props) => {
  const titleProps = useSpring({
    from: {
      bottom: "-8%",
      opacity: 0,
    },
    to: {
      bottom: hovered ? "8%" : "-8%",
      opacity: hovered ? 1 : 0,
    },

    delay: 100,
    config: {
      mass: 1,
      tension: 800,
      friction: 90,
    },
  });
  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <animated.span
        style={titleProps}
        className="absolute text-3xl font-bold text-white inter"
      >
        Self-serve Booking
      </animated.span>
    </div>
  );
};

export default Balloons;
