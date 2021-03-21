import * as React from 'react';
import * as styles from './accordion-item.module.scss';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.state = {
      opened: false
    };
  }

  toggleIsOpen() {
    this.setState(state => ({
      opened: !state.opened
    }));
  }

  render() {
    const [title, content] = React.Children.toArray(this.props.children);
    let accordionItemClassName = styles.accordionItem;
    if (this.state.opened) {
      accordionItemClassName += ` ${styles.accordionItemOpened}`;
    }
    return (
            <li>
              <div className={accordionItemClassName}
                   onClick={this.toggleIsOpen}>
                <div className={styles['accordionItem__line']}>
                  <div className={styles['accordionItem__title']}>
                    {title}
                  </div>
                  <span className={styles['accordionItem__icon']}/>
                </div>
                <div className={styles['accordionItem__inner']}>
                  <div className={styles['accordionItem__content']}>
                    <p className={styles['accordionItem__paragraph']}>
                      {content}
                    </p>
                  </div>
                </div>
              </div>
            </li>
    )
  }
}

export default AccordionItem;
