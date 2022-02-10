import { useState } from 'react';

import TabsComponentStyle from '../../styles/components/ProfileTaps/TabsComponentStyle';

import leftArrow from '../../assets/images/leftArrow.svg'
import rightArrow from '../../assets/images/Rightarrow.svg'


const TabsComponent = ({data}) => {
  const [state, setstate] = useState(`${data.tabsName}0`);

  return (
    <div className={TabsComponentStyle}>
      <ul className='tabs-menu'>
        {data.data.map((item, index) => {
          return (
            <>
              {
                state !== `${data.tabsName}0` && state === `${data.tabsName}${index}`
                ?
                <img onClick={() => setstate(`${data.tabsName}${index - 1}`)} src={leftArrow}/>
                : null
              }
              <li key={index} onClick={() => setstate(`${data.tabsName}${index}`)} style={{borderBottom: ((state === `${data.tabsName}${index}`) ? '#242535 solid 3px' : 'rgb(204,204,204) solid 3px')}} className={((state === `${data.tabsName}${index}`) ? 'tab' : 'tab hidde')}>{ item.title }</li>
              
              {
                state !== `${data.tabsName}2` && state === `${data.tabsName}${index}`
                ?
                <img onClick={() => setstate(`${data.tabsName}${index + 1}`)} src={rightArrow}/>
                : null
              }
            </>
            )
          })
        }
      </ul>

      <div>
        {
          data.data.map((item, index) => {
            return (
              <div key={index}>
                {
                  state === `${data.tabsName}${index}`
                  ?
                  <>
                    {
                      item.type === 'component'
                      ?
                      <div className='tab-content'>
                        {item.content}
                      </div>
                      :
                      item.type === 'text'
                      ?
                      <div className='tab-content-text'>
                        <p>
                          {item.content}
                        </p>
                      </div>
                      : null
                    }
                  </>
                  : null
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TabsComponent;