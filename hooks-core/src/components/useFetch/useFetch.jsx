import { useEffect, useRef, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState({ data: null, loading: false });
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      // called when the component is unmount
      //   this is very important to cancle an fetch request
      isCurrent.current = false;
    };
  }, []);
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: data, loading: false });
          }
        }, 3000);
      });
  }, [url, setState]);
  return state;
}

export default useFetch;
