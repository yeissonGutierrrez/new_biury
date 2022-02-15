import QuizButton from './QuizButton';

function QuizStep4({ setStep, question }) {
  return (
    <div className='step4'>
      <h4 className='question-title'>
        ¿EN CUÁL DE ESTOS TONOS <br /> CLASIFICARÍAS TU TONO DE PIEL?
      </h4>
      <p className='paragraph1'>
        No es el color de la piel, es el brillo que irradias. <br />
        Te lo preguntamos por que cada tono tiene necesidades <br />y cuidados
        distintos.
      </p>

      <div className='answers-wrapper'>
        {question.Answers.length <= 2 ? (
          <div className='buttons'>
            {question.Answers.map((item, index) => {
              return index === 0 ? (
                <div className='two' key={index}>
                  <div className={index + 1}>
                    <QuizButton
                      width={'200px'}
                      bgColor={
                        item.value == 'Claro'
                          ? 'rgb(250,225,212)'
                          : 'rgb(223,187,160)'
                      }
                      borderColor={
                        item.value == 'Claro' ? '#F6CDB7' : '#CA8D61'
                      }
                      question={item.value}
                    />
                  </div>
                </div>
              ) : (
                <div className='3' key={index}>
                  <QuizButton
                    width={'200px'}
                    bgColor={
                      item.value == 'Claro'
                        ? 'rgb(250,225,212)'
                        : 'rgb(223,187,160)'
                    }
                    borderColor={item.value == 'Claro' ? '#F6CDB7' : '#CA8D61'}
                    question={item.value}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className='buttons'>
            <div className='two'>
              {question.Answers.map((item, index) => {
                index <= 1 ? (
                  <QuizButton
                    width={'200px'}
                    bgColor={
                      item.value == 'Claro'
                        ? 'rgb(250,225,212)'
                        : 'rgb(223,187,160)'
                    }
                    borderColor={item.value == 'Claro' ? '#F6CDB7' : '#CA8D61'}
                    question={item.value}
                    key={index}
                  />
                ) : (
                  <div className='3'>
                    <QuizButton
                      width={'200px'}
                      bgColor='rgb(162,126,105)'
                      borderColor='#642805'
                      question={question.Answers[2].value}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step3');
            setStep('step3');
          }}
          className='pagination-button'
        >
          ANTERIOR
        </button>
        <button
          onClick={() => {
            setStep('step5');
            localStorage.setItem('step-quiz', 'step5');
          }}
          className='pagination-button'
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep4;
