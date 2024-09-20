import { Route, Routes } from "react-router-dom";
import Base from "./pages/base";
import Home from "./pages";

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
