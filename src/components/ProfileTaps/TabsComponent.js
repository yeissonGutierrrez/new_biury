import { useState } from 'react';

import TabsComponentStyle from '../../styles/components/ProfileTaps/TabsComponentStyle';

const TabsComponent = ({ data }) => {
  const [state, setstate] = useState(`${data.tabsName}0`);

  return (
    <div className={TabsComponentStyle}>
      <ul className='tabs-menu'>
        {data.data.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setstate(`${data.tabsName}${index}`)}
              style={{
                borderBottom:
                  state === `${data.tabsName}${index}`
                    ? '#242535 solid 3px'
                    : 'rgb(204,204,204) solid 3px',
              }}
              className='tab'
            >
              {item.title}
            </li>
          );
        })}
      </ul>

      <div>
        {data.data.map((item, index) => {
          return (
            <div key={index}>
              {state === `${data.tabsName}${index}` ? (
                <>
                  {item.type === 'component' ? (
                    <div className='tab-content'>{item.content}</div>
                  ) : item.type === 'text' ? (
                    <div className='tab-content-text'>
                      <p>{item.content}</p>
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabsComponent;
