import { BrowserRouter as Router, Prompt } from "react-router-dom";
import Navbar from "../../common/Navbar";
import "./App.css";

function App() {
  return (
    <Router
      basename="/limon"
      getUserConfirmation={(message, callback) => {
        // this is the default behavior
        const allowTransition = window.confirm(message);
        callback(allowTransition);
      }}
      forceRefresh={true}
      keyLength={3}
    >
      <div className="App">
        <Prompt message="Are you sure you want to leave?" />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
