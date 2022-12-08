import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { redTheme } from '../src/muiTheme';
import Header from '../src/components/Header';

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <main>
                <div className="main_container _container">
                    <div className="section-title">
                        Анкета обратной связи
                    </div>
                    <div className="content">
                        <ThemeProvider theme={redTheme}>
                            <Button onClick={()=>{navigate('/questionnaire')}} size='medium' variant="contained">Пройти опрос</Button>
                        </ThemeProvider>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainPage;