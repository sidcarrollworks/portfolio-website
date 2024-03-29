import React from "react";
import { useSpring, animated } from "@react-spring/web";

import connector from "./connector.svg";
import node1 from "./node1.png";
import node2 from "./node2.png";
import grid from "../../assets/png/grid.png";

interface Props {
  hovered?: any;
}

const Nodes = ({ hovered }: Props) => {
  const node1Props = useSpring({
    from: {
      opacity: 0,
      transform: "translate(-10rem, 100%)",
      scale: 1,
    },

    to: [
      {
        opacity: hovered ? 1 : 0,
        transform: hovered
          ? "translate(-10rem, 0%)"
          : "translate(-10rem, 100%)",
      },
      {
        transform: hovered ? "translate(-6rem, 0%)" : "translate(-10rem, 0%)",
      },
      {
        scale: hovered ? 0.8 : 1,
      },
    ],
    reset: true,
    delay: 900,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  const node2Props = useSpring({
    from: {
      opacity: 0,
      x: 300,
      y: 0,
      scale: 1,
    },
    to: [
      {
        x: hovered ? 100 : 300,

        opacity: hovered ? 1 : 0,
      },
      {
        y: hovered ? -11 : 100,
      },
      {
        scale: hovered ? 0.8 : 1,
      },
    ],

    delay: 1050,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  const connectorProps = useSpring({
    from: {
      opacity: 0,
      scale: 0,
    },
    to: [{ opacity: 0 }, { opacity: 1 }, { scale: hovered ? 1 : 0 }],

    delay: 1300,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  const gridProps = useSpring({
    from: {
      opacity: 0,
      scale: 0,
    },
    to: { scale: hovered ? 3.5 : 0, opacity: hovered ? 1 : 0 },
    delay: 1000,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <animated.img src={grid} />
      <animated.img
        src={connector}
        style={connectorProps}
        className="absolute"
      />
      <animated.img src={node1} style={node1Props} className="absolute" />
      <animated.img src={node2} style={node2Props} className="absolute" />
    </div>
  );
};

export default Nodes;
