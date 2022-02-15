import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

function QuizStep6({ setStep, question }) {
  const [answerSelected, setAnswerSelected] = useState(null);
  const colorBackground = (value) => {
    switch (value) {
      case 'BLONDE - RUBIO':
        return 'rgb(246,255,125)';

      case 'ROJO - NARANJA':
        return 'rgb(254,151,102)';

      case 'CAFÉ':
        return 'rgb(162,126,105)';

      case 'NEGRO':
        return 'rgb(128, 139, 150)';

      case 'BLANCO - DECOLORADO':
        return 'rgb(254, 249, 231 )';
    }
  };

  const colorBorder = (value) => {
    switch (value) {
      case 'BLONDE - RUBIO':
        return '#F0FF26';

      case 'ROJO - NARANJA':
        return '#FB5200';

      case 'CAFÉ':
        return '#642805';

      case 'NEGRO':
        return '#2D1702';

      case 'BLANCO - DECOLORADO':
        return '#FBFCC7';
    }
  };

  const setAnswer = (index) => {
    if (index == answerSelected) {
      setAnswerSelected(null);
    } else {
      setAnswerSelected(index);
    }
  };

  return (
    <div className='step5'>
      <h4 className='question-title'>{question.question}</h4>

      <div className='answers-wrapper'>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index <= 2 ? (
              <QuizButton
                width={'170px'}
                bgColor={colorBackground(item.value)}
                borderColor={colorBorder(item.value)}
                question={item.value}
                key={index}
                hover={index == answerSelected ? true : false}
                onClick={() => setAnswer(index)}
              />
            ) : null;
          })}
        </div>

        <div className='answers-container2'>
          {question.Answers.map((item, index) => {
            return index > 2 ? (
              <QuizButton
                width={'170px'}
                bgColor={colorBackground(item.value)}
                borderColor={colorBorder(item.value)}
                question={item.value}
                key={index}
                hover={index == answerSelected ? true : false}
                onClick={() => setAnswer(index)}
              />
            ) : null;
          })}
        </div>

        <div className='answers-container-mobile'>
          <div className='grid-wrapper'>
            {question.Answers.map((item, index) => {
              return index <= 3 ? (
                <QuizButton
                  key={index}
                  width={'130px'}
                  bgColor={colorBackground(item.value)}
                  borderColor={colorBorder(item.value)}
                  question={item.value}
                  hover={index == answerSelected ? true : false}
                  onClick={() => setAnswer(index)}
                />
              ) : null;
            })}
          </div>
          <QuizButton
            width={'130px'}
            bgColor={colorBackground(question.Answers[4].value)}
            borderColor={colorBorder(question.Answers[4].value)}
            question={question.Answers[4].value}
            hover={answerSelected == 4 ? true : false}
            onClick={() => setAnswer(4)}
          />
        </div>
      </div>

      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step5');
            setStep('step5');
          }}
          className='pagination-button'
        >
          ANTERIOR
        </button>
        <button
          onClick={() => {
            setStep('step7');
            localStorage.setItem('step-quiz', 'step7');
          }}
          className='pagination-button'
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep6;
