import React from 'react';
import Questionnaire from '../src/components/Questionnaire';
import Header from '../src/components/Header';

const QuestionnairePage = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="main_container _container">
                    <div className="section-title">
                        Анкета обратной связи
                    </div>
                    <div style={{background: 'none'}} className="content">
                        <Questionnaire/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default QuestionnairePage;