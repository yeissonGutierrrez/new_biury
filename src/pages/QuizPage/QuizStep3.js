import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

function QuizStep3({ setStep, question }) {
  const [nickName, setNickName] = useState(localStorage.getItem('nickName'));
  const [indexSelected, setIndexSelected] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(
    localStorage.getItem('answerStep3')
      ? JSON.parse(localStorage.getItem('answerStep3'))
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

    localStorage.setItem('answerStep3', JSON.stringify(answerSelected));
    setStep('step4');
    localStorage.setItem('step-quiz', 'step4');
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };
  return (
    <div className='step3'>
      <h4 className='question-title'>{question.question.substring(0, 37)}</h4>
      <p className='paragraph1'>
        {question.question.substring(37, question.question.length)}
      </p>
      <div className='answers-wrapper'>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index <= 2 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,245,187)'
                borderColor='#00EF8E'
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
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index > 2 && index <= 5 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,245,187)'
                borderColor='#00EF8E'
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
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index == 6 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,245,187)'
                borderColor='#00EF8E'
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

        <div className='answers-container-mobile'>
          <div className='grid-wrapper'>
            {question.Answers.map((item, index) => {
              return (
                <QuizButton
                  width={'200px'}
                  bgColor='rgb(102,245,187)'
                  borderColor='#00EF8E'
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
              );
            })}
          </div>
        </div>
      </div>
      {answerRequired == true ? (
        <p style={textDanger}>Debe Seleccionar una opción</p>
      ) : null}

      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step2');
            setStep('step2');
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

export default QuizStep3;
