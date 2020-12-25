import React, { useEffect, useState } from "react";

function MouseTracker() {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCords({
        x: e.clientX,
        y: e.clientY,
      });
    });
    return () => {
      document.removeEventListener("mousemove");
    };
  }, []);
  return cords;
}
const Cat = () => {
  const { x, y } = MouseTracker();
  return (
    <img src="/logo192.png" style={{ position: "absolute", left: x, top: y }} />
  );
};
export default Cat;
