import React, { useEffect, useRef, useState } from "react";

function CountRender(value) {
  const countRenderRef = useRef(1);

  // useEffect(function afterRender() {
  //   countRenderRef.current++;
  // });
  console.log(`${value}: ${countRenderRef.current++}`);
  // return <div>I've rendered {countRenderRef.current} times</div>;
}

export default CountRender;
