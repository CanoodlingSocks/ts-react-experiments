import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/shared/layout";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import BootstrapExercise from "./components/React Bootstrap/BootstrapExercise";
import Accordion from "./components/React Bootstrap/Accordion";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import Test from "./components/Protected/test";

const AppRouter = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {isLoggedIn ? (
            <Route path="/test" element={<Test isLoggedIn={isLoggedIn} />} />
          ) : (
            <Route path="/test" element={<Navigate to="/login" />} />
          )}
          <Route path="/react-bootstrap" element={<BootstrapExercise />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/calendar" element={<CalendarContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
