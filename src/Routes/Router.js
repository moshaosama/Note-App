import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Add from "../components/Add";

function RouterBages() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Add" element={<Add />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default RouterBages;
