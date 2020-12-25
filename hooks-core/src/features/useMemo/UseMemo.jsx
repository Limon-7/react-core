import useFetch from "components/useFetch/useFetch";
import React, { useCallback, useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json"
  );

  const computeLongestWord = useCallback((arr) => {
    if (!arr) return [];
    let longestWord = "";
    console.log("computing longest word");
    JSON.parse(arr).forEach((sentence) => {
      sentence.split(" ").forEach((word, idx) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });

    return longestWord;
  }, []);
  // using smaple function
  /* const computeLongestWord = (arr) => {
    if (!arr) return [];
    let longestWord = "";
    console.log("computing longest word");
    JSON.parse(arr).forEach((sentence) => {
      sentence.split(" ").forEach((word, idx) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });

    return longestWord;
  }; */
  const longestWord = useMemo(() => computeLongestWord(data), [data]);
  return (
    <div className="useMemo">
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{longestWord}</div>
    </div>
  );
}

export default UseMemo;
