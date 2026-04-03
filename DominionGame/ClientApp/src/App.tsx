import { Routes, Route } from "react-router-dom";
import DominionRandomizer from "./components/DominionRandomizer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DominionRandomizer />} />
      </Routes>
    </div>
  );
};
export default App;
