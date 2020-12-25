import Model from "./components/Modal";
import "./App.css";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log("toggle", toggle);
  return (
    <div className="App">
      <p>Header component</p>
      <input type="button" onClick={handleToggle} value="Show Model" />

      <Model toggle={toggle} handleOnClose={handleToggle}>
        hello model
      </Model>
      <p>
        Helllosnn fgdgdh gsddskdfgf hdhgdfgf gdgdgd hdhdh dhdhdj hdhdhj djjdjd
        jjdjd
      </p>
    </div>
  );
}

export default App;
