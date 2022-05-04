import { Routes, Route } from "react-router-dom";
import Index from "./main/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
