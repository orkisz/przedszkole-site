import * as React from 'react';
import AccordionItem from './accordion-item';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = React.Children.toArray(children).filter(item => item.type === AccordionItem);
    return (
            <ul>
              {items}
            </ul>
    );
  }
};

export default Accordion;
