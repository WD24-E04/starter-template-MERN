import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
