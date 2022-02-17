import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

function QuizStep6({ setStep, question }) {
  const [nickName, setNickName] = useState(localStorage.getItem('nickName'));
  const [indexSelected, setIndexSelected] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(
    localStorage.getItem('answerStep6')
      ? JSON.parse(localStorage.getItem('answerStep6'))
      : { responseOptionId: '' }
  );

  useEffect(() => {
    updateState();
  }, []);

  const [answerRequired, setAnswerRequired] = useState(false);
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

    localStorage.setItem('answerStep6', JSON.stringify(answerSelected));
    setStep('step7');
    localStorage.setItem('step-quiz', 'step7');
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };
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
                hover={
                  indexSelected == index ||
                  answerSelected.responseOptionId == item.id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(index)}
                key={index}
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
                hover={
                  indexSelected == index ||
                  answerSelected.responseOptionId == item.id
                    ? true
                    : false
                }
                onClick={() => selectedIndex(index)}
                key={index}
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
                  hover={
                    indexSelected == index ||
                    answerSelected.responseOptionId == item.id
                      ? true
                      : false
                  }
                  onClick={() => selectedIndex(index)}
                  key={index}
                />
              ) : null;
            })}
          </div>
          <QuizButton
            width={'130px'}
            bgColor={colorBackground(question.Answers[4].value)}
            borderColor={colorBorder(question.Answers[4].value)}
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
      </div>

      {answerRequired == true ? (
        <p style={textDanger}>Debe Seleccionar una opción</p>
      ) : null}

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
        <button onClick={() => setAnswer()} className='pagination-button'>
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep6;
