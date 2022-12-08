import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { redTheme } from '../src/muiTheme';
import Header from '../src/components/Header';

const StaffPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <main>
                <div className="main_container _container">
                    <div className="section-title">
                        <ThemeProvider theme={redTheme}>
                            <Button onClick={()=>{navigate('/questionnairestaff')}} size='medium' variant="contained">Опрос для персонала</Button>
                        </ThemeProvider>
                        <ThemeProvider theme={redTheme}>
                            <Button onClick={()=>{navigate('/analitics')}} size='medium' variant="contained">Аналитика</Button>
                        </ThemeProvider>
                    </div>
                    <div style={{background: 'none'}} className="content">
                        {/* <ThemeProvider theme={redTheme}>
                            <Button onClick={()=>{navigate('/questionnaire')}} size='medium' variant="contained">Опрос для персонала</Button>
                        </ThemeProvider>
                        <ThemeProvider theme={redTheme}>
                            <Button onClick={()=>{navigate('/analitics')}} size='medium' variant="contained">Аналитика</Button>
                        </ThemeProvider> */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default StaffPage;