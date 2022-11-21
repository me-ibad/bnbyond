import React, { useEffect, useState } from 'react';
import TabPane from './TabPane';

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState('');
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className='tabs my-4 mx-4'>
      <ul className='flex grid-cols-6 gap-8 cursor-pointer'>
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={` p-2 px-4  ${
              item === active
                ? 'bg-white text-black border-b border-black'
                : 'text-color-grey'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className='tab-content mt-6'>
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div className='tab-child'>{childContent[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          '`' + componentName + '` children should be of type `TabPane`.'
        );
      }
    });
    return error;
  },
};

export default Tabs;
