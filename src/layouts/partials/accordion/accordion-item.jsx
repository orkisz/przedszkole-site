import React from 'react';
import * as styles from './accordion-item.module.scss';

const AccordionItem = ({ title, image, children, opened, onClick, className, headClassName, contentClassName }) => {
  let accordionItemClassName = `${styles.accordionItem} ${className ?? ''}`;
  if (opened) {
    accordionItemClassName += ` ${styles.accordionItemOpened}`;
  }
  return (
          <li>
            <div className={accordionItemClassName}
                 onClick={onClick}>
              <div className={`${headClassName} ${styles['accordionItem__line']}`}>
                <img className={styles['accordionItem__image']}
                     src={image}
                     alt={title}/>
                <div className={styles['accordionItem__title']}>
                  {title}
                </div>
              </div>
              <div className={styles['accordionItem__inner']}>
                <div className={`${contentClassName} ${styles['accordionItem__content']}`}>
                  {children}
                </div>
              </div>
            </div>
          </li>
  );
}

export default AccordionItem;
