import * as React from 'react';
import Header from './partials/header';

const SimpleTwoColumnLayout = ({ title, subtitle, children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
          <>
            <Header title={title}
                    subtitle={subtitle}/>
            <article className="container">
              <div className="columns is-variable is-8">
                <div className="column is-half has-text-justified">
                  {left}
                </div>
                <div className="column is-half has-text-justified">
                  {right}
                </div>
              </div>
            </article>
          </>
  );
};

export default SimpleTwoColumnLayout;
