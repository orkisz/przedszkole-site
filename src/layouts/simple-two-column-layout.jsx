import * as React from 'react';

const SimpleTwoColumnLayout = ({ title, subtitle, children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
          <article className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <header className="header">
                  <h2>{title}</h2>
                  <strong className="header--subtitle">
                    <p>{subtitle}</p>
                  </strong>
                </header>
              </div>
            </div>
            <div className="columns is-variable is-8">
              <div className="column is-half has-text-justified">
                {left}
              </div>
              <div className="column is-half has-text-justified">
                {right}
              </div>
            </div>
          </article>
  );
};

export default SimpleTwoColumnLayout;
