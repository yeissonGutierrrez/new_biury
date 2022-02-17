import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

import face1 from '../../assets/images/Quiz/face1.svg';
import face2 from '../../assets/images/Quiz/face2.svg';
import face3 from '../../assets/images/Quiz/face3.svg';
import face4 from '../../assets/images/Quiz/face4.svg';
import face5 from '../../assets/images/Quiz/face5.svg';

function QuizStep2({ setStep, question }) {
  const [nickName, setNickName] = useState(localStorage.getItem('nickName'));
  const [indexSelected, setIndexSelected] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(
    localStorage.getItem('answerStep2')
      ? JSON.parse(localStorage.getItem('answerStep2'))
      : { responseOptionId: '' }
  );
  const [answerRequired, setAnswerRequired] = useState(false);

  useEffect(() => {
    updateState();
  }, []);

  const updateState = () => {
    for (let i = 0; i < question.Answers.length; i++) {
      if (question.Answers[i].id === answerSelected.responseOptionId) {
        selectedIndex(i);
        break;
      }
    }
  };

  const selectedIndex = (index) => {
    setIndexSelected(index);
    setAnswerSelected({
      responseOptionId: question.Answers[index].id,
    });
  };

  const setAnswer = () => {
    setAnswerRequired(false);
    if (indexSelected == null) {
      setAnswerRequired(true);
      return;
    }

    localStorage.setItem('answerStep2', JSON.stringify(answerSelected));
    setStep('step3');
    localStorage.setItem('step-quiz', 'step3');
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };

  return (
    <div className='step2'>
      <h4 className='question-title'>
        {question.question.replace('(apodo)', nickName)}
      </h4>
      <div className='answers-wrapper'>
        <div className='two'>
          <div className='answer'>
            <img src={face1} />
            <div className='button'>
              <QuizButton
                width={'150px'}
                bgColor='rgb(215,247,229)'
                borderColor='#BCF1D3'
                question={question.Answers[1].value}
                hover={
                  indexSelected == 1 ||
                  answerSelected.responseOptionId == question.Answers[1].id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(1)}
              />
            </div>
            <p>
              · Suave y uniforme. <br />
              · Luminosa <br />
              · Apariencia fresca. <br />
              · Saludable <br />
            </p>
          </div>

          <div className='answer'>
            <img src={face2} />
            <div className='button'>
              <QuizButton
                width={'150px'}
                bgColor='rgb(253,219,212)'
                borderColor='#FBC3B8'
                question={question.Answers[3].value}
                hover={
                  indexSelected == 3 ||
                  answerSelected.responseOptionId == question.Answers[3].id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(3)}
              />
            </div>
            <p>
              · Producción <br />
              excesiva de grasa. <br />
              · Acne y puntos negros <br />
              visibles. <br />
              · Poros abiertos. <br />
              · Poca duración de <br />
              maquillaje.
            </p>
          </div>

          <div className='answer'>
            <img src={face3} />
            <div className='button'>
              <QuizButton
                width={'150px'}
                bgColor='rgb(251,227,169)'
                borderColor='#F7D06F'
                question={question.Answers[2].value}
                hover={
                  indexSelected == 2 ||
                  answerSelected.responseOptionId == question.Answers[2].id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(2)}
              />
            </div>
            <p>
              · Combinación <br />
              de zona T grasa <br />
              (mentón, nariz y mentón). <br />
              · zona de mejillas <br />
              secas.
            </p>
          </div>

          <div className='answer'>
            <img src={face4} />
            <div className='button'>
              <QuizButton
                width={'150px'}
                bgColor='rgb(247,197,182)'
                borderColor='#F19E85'
                question={question.Answers[4].value}
                hover={
                  indexSelected == 4 ||
                  answerSelected.responseOptionId == question.Answers[4].id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(4)}
              />
            </div>
            <p>
              Tirante y seca. <br />
              · Alta duración del maquillaje. <br />
              · Poros poco visibles. <br />
              · Lineas de expresión marcadas. <br />
              · Tono apagado. <br />
            </p>
          </div>
        </div>

        <div className='one'>
          <div className='answer'>
            <img src={face5} />
            <div className='button'>
              <QuizButton
                width={'150px'}
                bgColor='rgb(202,102,249)'
                borderColor='#A600F5'
                question={question.Answers[0].value}
                hover={
                  indexSelected == 0 ||
                  answerSelected.responseOptionId == question.Answers[0].id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(0)}
              />
            </div>
            <p>
              Tendencia a <br />
              ponerse roja. <br />
              · Presenta fácilmente <br />
              irritación.
            </p>
          </div>
        </div>
      </div>
      {answerRequired == true ? (
        <p style={textDanger}>Debe Seleccionar una opción</p>
      ) : null}
      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step1');
            setStep('step1');
          }}
          className='pagination-button'
        >
          ANTERIOR
        </button>
        <button onClick={() => setAnswer()} className='pagination-button'>
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep2;
