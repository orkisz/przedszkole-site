import * as React from 'react';
import * as styles from './simple-two-column-layout.module.scss';

const StripedLayout = ({ title, subtitle, children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
          <article>
            <div className="container">
              <header className={`${styles.header} has-text-centered`}>
                <h2>{title}</h2>
                <strong className={styles.subtitle}>{subtitle}</strong>
              </header>
            </div>
            {React.Children.map(children, child => {
              const [text, image] = React.Children.toArray(child);
            })}
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

export default StripedLayout;
