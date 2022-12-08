import React, {useContext} from 'react';
import Header from '../src/components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { redTheme } from '../src/muiTheme';
import { auth, IAuthContext } from '../src/App';
import { useNavigate } from 'react-router-dom';

const RegPage = () => {
    const {isAuth, setIsAuth}: IAuthContext = useContext(auth)
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <main>
                <div className='auth'>
                    <div className="auth__container _container">
                        <div className="auth__window">
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                    setIsAuth(true)
                                    navigate('/');
                                }} className="content">
                                <div className="login">Login</div>
                                <ThemeProvider theme={redTheme}>
                                    <TextField required type="email" name='login' id="outlined-basic" label="Login" variant="outlined" />
                                </ThemeProvider>
                                <ThemeProvider theme={redTheme}>
                                    <TextField required type="password" name='password' id="outlined-basic" label="Password" variant="outlined" />
                                </ThemeProvider>
                                <ThemeProvider theme={redTheme}>
                                    <Button type='submit' size="large" variant="contained">Войти</Button>
                                </ThemeProvider>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default RegPage;