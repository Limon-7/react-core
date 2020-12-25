import { useLayoutEffect, useRef, useState } from "react";

// function useMessure(refs, deps) {
//   const [rect, setRect] = useState({});
//   useLayoutEffect(() => {
//     setRect(refs.current.getBoundingClientRect());
//   }, [deps]);
//   return rect;
// }
function useMessure(deps) {
  const [rect, setRect] = useState({});
  const refs = useRef();
  console.log(deps);
  useLayoutEffect(() => {
    setRect(refs.current.getBoundingClientRect());
  }, [deps]);
  return [rect, refs];
}

export default useMessure;
