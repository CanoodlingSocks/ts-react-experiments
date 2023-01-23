import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Login from "./components/Login/login";
import BootstrapExercise from "./components/React Bootstrap/BootstrapExercise";

const AppRouter = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route>
                    <Route index/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/react-bootstrap' element={<BootstrapExercise />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;