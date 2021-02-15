import React from "react";

function useFetch(url) {
  const [state, setState] = React.useState({ data: null, loading: false });
  const isCurrent = React.createRef(false);
  // const isCurrent = React.useRef(false);

  React.useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setTimeout(() => {
          if (!isCurrent.current) {
            setState({ data: data, loading: false });
          }
        }, 3000);
      });

    return () => {
      // called when the component is unmount
      //   this is very important to cancle an fetch request
      isCurrent.current = false;
    };
  }, [url, setState]);
  return state;
}

export default useFetch;
