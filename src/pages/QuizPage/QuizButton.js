import { useState } from 'react';
import QuizButtonStyle from '../../styles/pages/QuizPage/QuizButtonStyle';

function QuizButton({
  question,
  borderColor,
  bgColor,
  width,
  hover = false,
  onClick,
}) {
  return (
    <div className={`${QuizButtonStyle}`}>
      <button
        onClick={onClick}
        style={{
          borderColor: borderColor,
          backgroundColor: bgColor,
          width: width,
        }}
      >
        {question}
      </button>
      {hover ? <div className='border'></div> : null}
    </div>
  );
}
export default QuizButton;
