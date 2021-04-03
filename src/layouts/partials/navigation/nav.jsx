import React from 'react';
import { Link } from 'gatsby';
import * as styles from './nav.module.css';
import logo from './logo.png';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.windowClick = this.windowClick.bind(this);
    this.navRef = React.createRef();
  }

  componentWillMount() {
    window.addEventListener('click', this.windowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.windowClick);
  }

  windowClick(event) {
    if (this.state.isActive) {
      const innerNavElement = this.navRef.current;
      if (!innerNavElement.contains(event.target)) {
        this.toggleIsActive();
      }
    }
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
            <nav className={`navbar is-fixed-top ${styles.navigation}`}
                 ref={this.navRef}>
              <div className="container">
                <div className="navbar-brand">
                  <Link className="navbar-item"
                        to={'/'}>
                    <img src={logo}
                         alt="Logo"/>
                  </Link>
                  <span className="navbar-burger burger"
                        onClick={this.toggleIsActive}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                </div>
                <div id="navbarMenu"
                     className={navbarMenuClassNames}>
                  <div className="navbar-end">
                    <a className="navbar-item"
                       href="Javascript:void(0)">O nas
                    </a>
                    <a className="navbar-item"
                       href="Javascript:void(0)">Z życia przedszkola
                    </a>
                    <a className="navbar-item"
                       href="Javascript:void(0)">Strefa rodzica
                    </a>
                    <a className="navbar-item"
                       href="Javascript:void(0)">Galeria
                    </a>
                    <a className="navbar-item"
                       href="Javascript:void(0)">Kontakt
                    </a>
                  </div>
                </div>
              </div>
            </nav>
    )
  }
}

export default Navigation;
