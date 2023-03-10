import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
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
            <Route path="/react-bootstrap-exercises" element={<BootstrapExercise />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/calendar" element={<CalendarContainer />} />
          </Route>
            <Route path="/test" element={<Route><ProtectedRoute isLoggedIn={isLoggedIn} element={<Test />} path="/test" /></Route>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;