import React, {useState, useEffect} from 'react';
import { questions as questionsSourse } from '../questions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate} from 'react-router-dom';
import { redTheme } from '../muiTheme';

const QuestionnaireStaff = () => {
    const navigate = useNavigate();
    const [questionCount, setQuestionCount] = useState(0);
    const [questions, getQuestions] = useState(questionsSourse);
    const [answersArr, setAnswersArr] = useState<object[]>([])
    const [compleate, setCompleate] = useState(false);
    const [comment, setComment] = useState('');
    const [start, setStart] = useState(false);
    useEffect(()=>{
        console.log(questions);
    }, [])
    useEffect(()=>{
        console.log(answersArr);
    }, [answersArr])
    return (
        <div className='questions-container'>
            <div style={start ? {display: 'none'} : {display: 'block'}}>
                {/* <div className="progress-bar">
                    <div className="question-count">{questionCount+1}/{questions.length}</div>
                    <div className="bar">
                        <div style={{width: `${(questionCount)/questions.length*100}%`}} className="bar-value"></div>
                    </div>
                </div> */}
                <div className="question">
                    Введите ФИО
                </div>
                <ul style={{marginBottom: '10px'}} className="answers">
                    <ThemeProvider theme={redTheme}>
                        <TextField value={comment} onChange={(e) => { setComment(e.target.value)}} id="standard-basic" label="ФИО" variant="standard" />
                    </ThemeProvider>
                </ul>
                <ThemeProvider theme={redTheme}>
                    <Button onClick={()=>{setStart(true)}} size='medium' variant="contained">Продолжить</Button>
                </ThemeProvider>
            </div>
            {compleate ? 
                <>
                    <div className="question">Спасибо что прошли наш опрос</div>
                    {/* <div className="question">Ваш промокод: <strong>IRvn12124Kt</strong></div> */}
                    <ThemeProvider theme={redTheme}>
                    <Button onClick={()=>{navigate('/staff')}} size='medium' variant="contained">Вернуться</Button>
                    </ThemeProvider>
                </>
            : 
            <div style={start ? {display: 'block'} : {display: 'none'}}>
            <div className="progress-bar">
                <div className="question-count">{questionCount+1}/{questions.length}</div>
                <div className="bar">
                    <div style={{width: `${(questionCount)/questions.length*100}%`}} className="bar-value"></div>
                </div>
            </div>
            <div className="question">{questions[questionCount].question}</div>
            <ul className="answers">
                {questions[questionCount].variants.map((item, i)=>{
                    return <li key={i} onClick={() => {
                        setAnswersArr([...answersArr,  { answer: questions[questionCount].variants[i], comment: comment}])
                        setComment('');
                        if(questionCount === questions.length-1){
                            setCompleate(true)
                        } else{
                            setQuestionCount(questionCount + 1);
                        }
                    }}  className="answer">{item}</li>
                })}
            </ul>
            <ThemeProvider theme={redTheme}>
                <TextField value={comment} onChange={(e) => { setComment(e.target.value)}} id="standard-basic" label="Комментарий" variant="standard" />
            </ThemeProvider>
            </div>}
        </div>
    );
};

export default QuestionnaireStaff;