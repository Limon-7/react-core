import { useLayoutEffect, useRef, useState } from "react";

function useMessure(deps) {
  const [rect, setRect] = useState({});
  const refs = useRef();
  console.log("REFs:", refs);
  console.log(deps);
  useLayoutEffect(() => {
    setRect(refs.current.getBoundingClientRect());
  }, [deps]);
  return [rect, refs];
}

export default useMessure;
