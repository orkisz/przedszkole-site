import { Link } from 'gatsby';
import React from 'react';
import logo from './logo.png';
import * as styles from './nav.module.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      expandedDropdowns: {}
    }
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.windowClick = this.windowClick.bind(this);
    this.navRef = React.createRef();
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.windowClick);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('click', this.windowClick);
    }
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
      let dropdownStates = state.expandedDropdowns;
      if (state.isActive) {
        dropdownStates = {};
      }
      return {
        isActive: !state.isActive,
        expandedDropdowns: dropdownStates
      };
    });
  }

  toggleDropdown(key) {
    this.setState(state => {
      const currentDropdownState = state.expandedDropdowns[key];
      return {
        ...state,
        expandedDropdowns: {
          ...state.expandedDropdowns,
          [key]: !currentDropdownState
        }
      }
    });
  }

  render() {
    let navbarMenuClassNames = 'navbar-menu';
    if (this.state.isActive) {
      navbarMenuClassNames += ' is-active';
    }
    const ddState = this.state.expandedDropdowns;
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
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link"
                         onClick={() => this.toggleDropdown('about')}>
                        O nas
                      </a>

                      <div className={`${styles.dropdown} ${ ddState['about'] ? styles.dropdownExpanded : '' } navbar-dropdown`}>
                        <Link className="navbar-item"
                              to="/about/history">
                          Historia
                        </Link>
                        <Link className="navbar-item"
                              to="/about/patron">
                          Patron
                        </Link>
                        <Link className="navbar-item"
                              to="/about/statutory">
                          Statut
                        </Link>
                        <Link className="navbar-item"
                              to="/about/mission">
                          Misja
                        </Link>
                        <Link className="navbar-item"
                              to="/about/personnel">
                          Kadra
                        </Link>
                      </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link"
                         onClick={() => this.toggleDropdown('everyday')}>
                        Z życia przedszkola
                      </a>

                      <div className={`${styles.dropdown} ${ ddState['everyday'] ? styles.dropdownExpanded : '' } navbar-dropdown`}>
                        <Link className="navbar-item"
                              to="/everyday/groups">
                          Grupy
                        </Link>
                        <Link className="navbar-item"
                              to="/everyday/plan">
                          Plan dnia
                        </Link>
                        <Link className="navbar-item"
                              to="/everyday/additional-lessons">
                          Zajęcia dodatkowe
                        </Link>
                        <Link className="navbar-item"
                              to="/everyday/payments">
                          Opłaty
                        </Link>
                      </div>
                    </div>
                    <a className="navbar-item"
                       href="Javascript:void(0)">Strefa rodzica
                    </a>
                    <Link className="navbar-item" to="/gallery">
                      Galeria
                    </Link>
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
