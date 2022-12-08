import React from 'react';
import QuestionnaireStaff from '../src/components/QuestionnaireStaff';
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
                        <QuestionnaireStaff/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default QuestionnairePage;