import { fullRouter, router, IRoute } from "./Routes";
import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import { auth } from "../App";

const AppRouter = () => {
    const {isAuth} = useContext(auth);
    return (
        <Routes>
            {isAuth ? fullRouter.map((item: IRoute): React.ReactNode => {
                return <Route path={item.path} element={item.component} ></Route>
            }) : router.map((item: IRoute): React.ReactNode => {
                return <Route path={item.path} element={item.component} ></Route>
            })}
        </Routes>
    );
};

export default AppRouter;