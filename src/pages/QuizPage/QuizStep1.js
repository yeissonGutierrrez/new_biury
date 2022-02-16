import arrow from '../../assets/images/Quiz/BottomSemiArrow.svg';
import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

function QuizStep1({ setStep, question }) {
  const [email, setEmail] = useState(localStorage.getItem('nickName'));
  const [indexSelected, setIndexSelected] = useState(null);
  const [answerSelected, setAnswerSelected] = useState({});
  const [answerRequired, setAnswerRequired] = useState(false);

  useEffect(() => {
    let answer = localStorage.getItem('answerStep1');
    if (answer != null) {
      setAnswerSelected(JSON.parse(answer));
      question.Answers.map((item, index) => {
        if (item.id === answerSelected.responseOptionId) {
          setIndexSelected(index);
        }
      });
    }
  }, []);

  const selectedIndex = (index) => {
    setIndexSelected(index);
  };

  const setAnswer = () => {
    setAnswerRequired(true);

    if (indexSelected == null) {
      setAnswerRequired(true);
      return;
    }
    setAnswerSelected({
      responseOptionId: question.Answers[indexSelected].id,
    });

    localStorage.setItem('answerStep1', JSON.stringify(answerSelected));
    setStep('step2');
    localStorage.setItem('step-quiz', 'step2');
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };

  return (
    <div className='step1'>
      <h1 className='user_name'>Susi</h1>
      <h2>CUÉNTANOS SOBRE TI.</h2>
      <h3>100% CONFIDENCIAL</h3>
      <p className='paragraph1'>
        Mientras más honestas sean tus respuestas, <br /> más acertada será la
        personalización de tus productos.{' '}
      </p>
      <img src={arrow} />
      <h4 className='question-title'>
        {question.question.replace('(apodo)', email)}
      </h4>
      <p className='paragraph2'>
        No importa cuál sea tu identidad de genero, para <br /> nosotros lo
        único importante es tu felicidad.{' '}
      </p>
      <div className='answers-wrapper'>
        <div className='buttons'>
          {question.Answers.map((item, index) => {
            {
              return index <= 1 ? (
                <div className='two' key={index}>
                  <div className={index + 1}>
                    <QuizButton
                      bgColor={
                        index == 0 ? 'rgb(202,102,249)' : 'rgb(102,245,187)'
                      }
                      borderColor={index == 0 ? '#A600F5' : '#00EF8E'}
                      question={item.value}
                      hover={
                        index == indexSelected ||
                        answerSelected.responseOptionId == item.id
                          ? true
                          : false
                      }
                      onClick={() => selectedIndex(index)}
                    />
                  </div>
                </div>
              ) : (
                <div className='3' key={index}>
                  <QuizButton
                    bgColor='rgb(102,235,219)'
                    borderColor='#00DDC3'
                    question={item.value}
                    hover={index == indexSelected ? true : false}
                    onClick={() => selectedIndex(index)}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      {answerRequired == true ? (
        <p style={textDanger}>Debe Seleccionar una opción</p>
      ) : null}
      <button onClick={() => setAnswer()} className='pagination-button'>
        CONTINUAR
      </button>
    </div>
  );
}

export default QuizStep1;
