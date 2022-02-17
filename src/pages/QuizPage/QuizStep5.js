import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

function QuizStep5({ setStep, question }) {
  const [nickName, setNickName] = useState(localStorage.getItem('nickName'));
  const [indexSelected, setIndexSelected] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(
    localStorage.getItem('answerStep5')
      ? JSON.parse(localStorage.getItem('answerStep5'))
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

    localStorage.setItem('answerStep5', JSON.stringify(answerSelected));
    setStep('step6');
    localStorage.setItem('step-quiz', 'step6');
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };
  return (
    <div className='step5'>
      <h4 className='question-title'>
        {question.question.replace('(apodo)', nickName)}
      </h4>

      <div className='answers-wrapper'>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index <= 2 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,235,219)'
                borderColor='#00DDC3'
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

        <div className='answers-container2'>
          {question.Answers.map((item, index) => {
            return index > 2 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,235,219)'
                borderColor='#00DDC3'
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
              return index <= 3 ? (
                <QuizButton
                  width={'130px'}
                  bgColor='rgb(102,235,219)'
                  borderColor='#00DDC3'
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
        </div>
      </div>

      {answerRequired == true ? (
        <p style={textDanger}>Debe Seleccionar una opción</p>
      ) : null}

      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step4');
            setStep('step4');
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

export default QuizStep5;
