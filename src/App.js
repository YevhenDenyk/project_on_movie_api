import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {DetailMoviePage, MoviesPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movie'} element={<DetailMoviePage/>}/>
            </Route>
        </Routes>
    );
};

export {App};