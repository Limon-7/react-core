import React from "react";

function CountRender(value) {
  const countRenderRef = React.useRef(1);

  // React.useEffect(function afterRender() {
  //   countRenderRef.current++;
  // });
  console.log(`${value}: ${countRenderRef.current++}`);
  // return <div>I've rendered {countRenderRef.current} times</div>;
}

export default CountRender;
