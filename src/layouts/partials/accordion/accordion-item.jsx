import React from 'react';
import * as styles from './accordion-item.module.scss';

const AccordionItem = ({ title, image, children, opened, onClick }) => {
  let accordionItemClassName = '';
  if (opened) {
    accordionItemClassName += ` ${styles.accordionItemOpened}`;
  }
  return (
          <li>
            <div className={accordionItemClassName}
                 onClick={onClick}>
              <div className={styles['accordionItem__line']}>
                <img className={styles['accordionItem__image']}
                     src={image}
                     alt={title}/>
                <div className={styles['accordionItem__title']}>
                  {title}
                </div>
              </div>
              <div className={styles['accordionItem__inner']}>
                <div className={styles['accordionItem__content']}>
                  <div className={styles['accordionItem__paragraph']}>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </li>
  );
}

export default AccordionItem;
