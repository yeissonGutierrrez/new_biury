import QuizButton from './QuizButton';
import { useState, useEffect } from 'react';

function QuizStep7({ setStep, question }) {
  const [nickName, setNickName] = useState(localStorage.getItem('nickName'));

  const [clickAdd, setClickAdd] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(
    localStorage.getItem('answerStep7')
      ? JSON.parse(localStorage.getItem('answerStep7'))
      : []
  );

  const [answerRequired, setAnswerRequired] = useState(false);

  const selectedIndex = (index) => {
    let tempObjectAnswer = { responseOptionId: question.Answers[index].id };

    let pos = null;
    if (answerSelected.length > 0) {
      let data = answerSelected;
      data.map((item, position) => {
        if (item.responseOptionId == tempObjectAnswer.responseOptionId) {
          pos = position;
        }
      });

      if (pos == null) {
        let array = answerSelected;
        array.push(tempObjectAnswer);
        setAnswerSelected(array);
        setClickAdd(index + 3);
      } else {
        let array = answerSelected;
        array.splice(pos, 1);
        setAnswerSelected(array);
        setClickAdd(index + 2);
      }
    } else {
      let array = answerSelected;
      array.push(tempObjectAnswer);
      setAnswerSelected(array);
      setClickAdd(index + 2 * 3);
    }
  };

  const showSelectedItems = (id, click) => {
    let wait = click;
    const array = answerSelected;
    const value = array.filter((item) => item.responseOptionId == id);

    if (value.length == 0) {
      return false;
    } else {
      return true;
    }
  };

  const setAnswer = () => {
    setAnswerRequired(false);
    if (answerSelected.length == 0) {
      setAnswerRequired(true);
      return;
    }
    localStorage.removeItem('step-quiz');
    localStorage.removeItem('answerStep6');
    localStorage.removeItem('answerStep5');
    localStorage.removeItem('answerStep4');
    localStorage.removeItem('answerStep3');
    localStorage.removeItem('answerStep2');
    localStorage.removeItem('answerStep1');
    localStorage.removeItem('nickName');
    localStorage.removeItem('emailQuiz');
    setStep('suscribe');

    /*
    TODO: Se debe hacer la integracion para el POST
    La data se debe construir con todo los datos del localStarage
    mas la data de este componente construida almacenada en answerSelected
    */
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };

  return (
    <div className='step7'>
      <p className='paragraph1'>
        Última pregunta. <br /> Puedes elegir varias opciones.
      </p>
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
                hover={showSelectedItems(item.id, clickAdd)}
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
                hover={showSelectedItems(item.id, clickAdd)}
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
                  onClick={() => selectedIndex(index)}
                  key={index}
                />
              ) : null;
            })}
          </div>
          {question.Answers.map((item, index) => {
            return index == 4 ? (
              <QuizButton
                width={'130px'}
                bgColor='rgb(102,235,219)'
                borderColor='#00DDC3'
                question={item.value}
                onClick={() => selectedIndex(index)}
                key={index}
              />
            ) : null;
          })}
        </div>
      </div>

      {answerRequired == true ? (
        <p style={textDanger}>Debe Seleccionar al menos una opción</p>
      ) : null}

      <div className='pagination-container'>
        <button onClick={() => setStep('step6')} className='pagination-button'>
          ANTERIOR
        </button>
        <button onClick={() => setAnswer()} className='pagination-button'>
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep7;
