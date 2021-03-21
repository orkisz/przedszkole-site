import AccordionItem from './accordion-item';
import React, { cloneElement, useState } from 'react';

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = React.Children.toArray(children).filter(item => item.type === AccordionItem);
  return (
          <ul>
            {items.map((item, index) => {
              return cloneElement(item, {
                opened: activeIndex === index,
                onClick: () => setActiveIndex(index)
              })
            })}
          </ul>
  );
};

export default Accordion;
