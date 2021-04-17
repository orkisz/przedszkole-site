import * as React from 'react';
import * as styles from './simple-two-column-layout.module.scss';

const SimpleTwoColumnLayout = ({ title, subtitle, children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
          <article className="container">
            <header className={`${styles.header} has-text-centered`}>
              <h2>{title}</h2>
              <strong className={styles.subtitle}>{subtitle}</strong>
            </header>
            <div className="columns is-variable is-8">
              <div className="column is-half">
                {left}
              </div>
              <div className="column is-half">
                {right}
              </div>
            </div>
          </article>
  );
};

export default SimpleTwoColumnLayout;
