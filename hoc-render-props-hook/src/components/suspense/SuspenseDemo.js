import React, { Suspense, useEffect, useState } from "react";
import { fetchUser, fetchUser2 } from "./fetch.service";
function SuspenseDemo() {
  const [data, setdata] = useState(null);
  useEffect(async () => {
    var demo = await fetchUser("https://jsonplaceholder.typicode.com/posts");
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(demo);
    var res = await demo.json();
    setdata(res);
    console.log(res);
    let user = await fetchUser2("https://jsonplaceholder.typicode.com/posts");
    console.log("user", user);
  }, []);
  return (
    <div>
      <Suspense fallback={<>loading data</>}>
        <h1> Suspense demo </h1>
      </Suspense>
    </div>
  );
}

export default SuspenseDemo;
