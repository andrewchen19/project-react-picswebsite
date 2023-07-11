import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import "./styles/style.css";

function App() {
  const [isChinese, setIsChinese] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout isChinese={isChinese} setIsChinese={setIsChinese} />}
        >
          <Route index element={<Homepage isChinese={isChinese} />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
