import React from 'react';
import { formatDate } from '../../utils/date';
import * as styles from './header.module.scss';

const Header = ({ title, subtitle, date, containerStyle = '' }) => {
  return (
          <div className={`${styles.header} ${containerStyle}`}>
            <div className={`container`}>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <header className="header">
                    <h2>{title}</h2>
                    <strong className="header--subtitle">
                      <p>{subtitle}</p>
                    </strong>
                    {date && (
                            <aside className="mb-5 is-size-6">{formatDate(date)}</aside>
                    )}
                  </header>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Header;
