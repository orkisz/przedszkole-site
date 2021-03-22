import React from 'react';
import * as styles from './accordion-item.module.scss';

const AccordionItem = ({ children, opened, onClick }) => {
  const [title, content] = React.Children.toArray(children);
  let accordionItemClassName = styles.accordionItem;
  if (opened) {
    accordionItemClassName += ` ${styles.accordionItemOpened}`;
  }
  return (
          <li>
            <div className={accordionItemClassName}
                 onClick={onClick}>
              <div className={styles['accordionItem__line']}>
                <div className={styles['accordionItem__title']}>
                  {title}
                </div>
                <span className={styles['accordionItem__icon']}/>
              </div>
              <div className={styles['accordionItem__inner']}>
                <div className={styles['accordionItem__content']}>
                  <div className={styles['accordionItem__paragraph']}>
                    {content}
                  </div>
                </div>
              </div>
            </div>
          </li>
  );
}

export default AccordionItem;
