import React from "react";

function UserFetch(url, name, email) {
  const [data, setData] = React.useState([]);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.slice(0, 5));
    } catch (err) {
      console.log(err.message);
    }
  };
  React.useEffect(() => {
    fetchData(url);
    return () => {
      //   cleanup
    };
  }, [url]);
  return { data, name, email };
}

export default UserFetch;
