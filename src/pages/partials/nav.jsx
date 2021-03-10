import react from 'react';
import * as React from 'react';

class Navigation extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.toggleIsActive = this.toggleIsActive.bind(this);
  }

  toggleIsActive() {
    this.setState(state => {
      return {
        isActive: !state.isActive
      };
    });
  }

  render() {
    let navbarMenuClassNames = 'navbar-menu';
    if (this.state.isActive) {
      navbarMenuClassNames += ' is-active';
    }
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item"
               href="../">
              <img src="http://bulma.io/images/bulma-type-white.png"
                   alt="Logo"/>
            </a>
            <span className="navbar-burger burger" onClick={this.toggleIsActive}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
          </div>
          <div id="navbarMenu"
               className={navbarMenuClassNames}>
            <div className="navbar-end">
              <div className="tabs is-right">
                <ul>
                  <li className="is-active">
                    <a>Home</a>
                  </li>
                  <li>
                    <a href="">Examples</a>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Team</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
                <span className="navbar-item">
                                        <a className="button is-white is-outlined"
                                           href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html">
                                            <span className="icon">
                                                <i className="fa fa-github"></i>
                                            </span>
                                            <span title="Hello from the other side">View Source</span>
                                        </a>
                                    </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
