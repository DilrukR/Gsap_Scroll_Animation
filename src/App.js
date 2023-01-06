import "./App.css";
import Circles from "./circles/ciecles.jsx";
import Before from "./Components/Before/Before.jsx";
// import After from "./Components/After/After.jsx";
import Gone from "./Components/Gone/Gone.jsx";

function App() {
  return (
    <div className='App'>
      <Before />
      <Circles />

      <Gone />
    </div>
  );
}

export default App;
