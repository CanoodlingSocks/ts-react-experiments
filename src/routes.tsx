import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import BootstrapExercise from "./components/React Bootstrap/BootstrapExercise";
import Accordion from "./components/React Bootstrap/Accordion";
import CalendarContainer from "./components/Calendar/CalendarContainer";

const AppRouter = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route>
                    <Route index/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/react-bootstrap' element={<BootstrapExercise />} />
                    <Route path='/accordion' element={<Accordion />} />
                    <Route path='/calendar' element={<CalendarContainer />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;