import React, {useState, createContext, Dispatch} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import './index.scss';
export interface IAuthContext {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
const initial: IAuthContext = {
    isAuth: false,
    setIsAuth: (): void => {
        console.log('');
    }
}
export const auth = createContext<IAuthContext>(initial);
const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(initial.isAuth);
    return (
        <>
            <auth.Provider value={{isAuth, setIsAuth}}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </auth.Provider>
        </>
    );
};
export default App;