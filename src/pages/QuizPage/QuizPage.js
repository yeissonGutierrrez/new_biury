import { useState, useEffect } from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';
import QuizPageStyle from '../../styles/pages/QuizPage/QuizPageStyle';
import QuizForm from './QuizForm';
import QuizRegister from './QuizRegister';
import Api from '../../common/api';

function QuizPage() {
  const [step, setStep] = useState('register');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (questions.length == 0) {
      getQuestions();
    }
  });

  const getQuestions = async () => {
    let resp = await Api.get('questions?page=1&limit=10');
    if (resp.status == 200 || resp.status == 201) {
      setQuestions(resp.data.data.rows);
    }
    updateStep();
  };

  const updateStep = () => {
    let stepQuiz = localStorage.getItem('step-quiz');
    if (stepQuiz !== null) {
      setStep(stepQuiz);
    }
  };

  return (
    <>
      {step === 'register' ? (
        <>
          <Navbar></Navbar>
          <div className={QuizPageStyle}>
            <QuizRegister setStep={setStep} />
          </div>
        </>
      ) : (
        <QuizForm setStep={setStep} step={step} questions={questions} />
      )}
    </>
  );
}

export default QuizPage;
