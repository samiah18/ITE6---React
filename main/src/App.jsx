import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Activities/LandingPage/LandingPage";

import Activity1 from "./pages/Activities/Activity1/Activity1";
import Activity2 from "./pages/Activities/Activity2/Activity2";
import Activity3 from "./pages/Activities/Activity3/Activity3";
import Activity4 from "./pages/Activities/Activity4/Activity4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/activity1" element={<Activity1 />} />
      <Route path="/activity2" element={<Activity2 />} />
      <Route path="/activity3" element={<Activity3 />} />
      <Route path="/activity4" element={<Activity4 />} />
    </Routes>
  );
}

export default App;