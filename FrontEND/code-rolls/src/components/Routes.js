import { Routes, Route, useParams } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/Usuario";
import Planes from "./Pages/Planes";
import DetallePlan from "./Pages/DetallePlan";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/planes" element={<Planes />}></Route>
        <Route
          path="/planes/:id"
          element={<DetallePlan/>}
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
