import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    BrowserRouter,
    Outlet,

} from "react-router";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import { SignUp } from "../pages/SignUp/SignUp";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Guest />}>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </>
    )
);

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Guest />}>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
            <Route path="/" element={
                <>
                    <Outlet />
                    <Footer />
                </>
            }>
                <Route path="/login" element={<Login />} />I
                <Route path="/register" element={<SignUp />} />
            </Route>

        </Routes>
    </BrowserRouter>
)

