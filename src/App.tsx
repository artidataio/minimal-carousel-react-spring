import "./styles.css";
import React from "react";
import { useTransition, animated } from "@react-spring/web";

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  const handlePrev = () => {
    setReverse(true);
    setIndex(index === 0 ? 2 : index - 1);
  };
  const handleNext = () => {
    setReverse(false);
    setIndex(index === 2 ? 0 : index + 1);
  };

  const transitions = useTransition(index, {
    from: { transform: `translateX(${reverse ? "-" : ""}300px)` },
    enter: { transform: "translateX(0px)" },
    leave: { transform: `translateX(${reverse ? "" : "-"}300px)` }
  });

  return (
    <>
      <div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
      <div className="container">
        {transitions((style, i) => (
          <animated.div
            className="item"
            style={{
              ...style,
              background: i % 3 === 0 ? "red" : i % 3 === 1 ? "blue" : "green"
            }}
          >
            {i}
          </animated.div>
        ))}
      </div>
      <div>Spacer</div>
    </>
  );
}
