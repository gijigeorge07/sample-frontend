import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Sum from "./pages/login/Sum";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />

            <Route path="/home" element={<Sum />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
