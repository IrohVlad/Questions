import React from 'react';
import MainPage from '../../pages/MainPage';
import RegPage from '../../pages/RegPage';
import QuestionnairePage from '../../pages/QuestionnairePage';
import QuestionnaireStaffPage from '../../pages/QuestionnaireStaffPage';
import AnaliticsPage from '../../pages/AnaliticsPage';
import StaffPage from '../../pages/StaffPage';

export interface IRoute {
    component: React.ReactNode;
    path: string;
}

export const router: IRoute[] = [
    {
        component: <MainPage/>,
        path: '/'
    },
    {
        component: <RegPage/>,
        path: '/register'
    },
    {
        component: <QuestionnairePage/>,
        path: '/questionnaire'
    },
    {
        component: <MainPage/>,
        path: '*'
    },
];
export const fullRouter: IRoute[] = [
    {
        component: <MainPage/>,
        path: '/'
    },
    {
        component: <QuestionnaireStaffPage/>,
        path: '/questionnairestaff'
    },
    {
        component: <QuestionnairePage/>,
        path: '/questionnaire'
    },
    {
        component: <AnaliticsPage/>,
        path: '/analitics'
    },
    {
        component: <StaffPage/>,
        path: '/staff'
    },
    {
        component: <MainPage/>,
        path: '*'
    },
];