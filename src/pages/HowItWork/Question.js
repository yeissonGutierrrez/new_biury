
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


import QuestionStyle from '../../styles/pages/HowItWork/QuestionStyle';


function Question({Question, answer, image, margin}) {
    return (
        <div style={{margin: margin}} className={QuestionStyle}>
            <img className='photo' src={image}/>
            <Accordion className='myAccordion'>
                <AccordionSummary
                expandIcon={<ExpandCircleDownIcon  className='expandedIcon' />}
                aria-controls="panel1a-content"
                className='myAccordionHeader'
                >
                 <h3>
                    {Question}
                 </h3>

                </AccordionSummary>
                <AccordionDetails className='myAccordionContent'>
                    <p>
                        {answer}
                    </p>
         
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Question