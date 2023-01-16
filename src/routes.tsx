import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Login from "./components/Login/login";

const AppRouter = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route>
                    <Route index/>
                    <Route path='/login' element={<Login />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;