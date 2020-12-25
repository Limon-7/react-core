import { useEffect, useState } from "react";

function UseFetch(url) {
  const [state, setState] = useState({ data: null, loading: false });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setState({ data: data, loading: false });
      });
  }, [url, setState]);
  return state;
}

export default UseFetch;
