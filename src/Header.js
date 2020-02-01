import React, { Component } from 'react';
import { Navbar, Nav, ButtonToolbar, Button } from 'react-bootstrap';
import { languages, getLangString, getAllLanguages } from './Lang';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { current_lang: props.current_lang };
  }
  setLang(lang, e) {
    this.setState({ current_lang: lang });
    this.props.UpdateCurrentLang(lang);
    localStorage.current_lang = lang;
    return false;
  }
  LangsList(languages, current_lang) {
    var html = "";
    languages.map(
      function (lang) {
        var current_lang_class = null;
        if (lang.url == current_lang) current_lang_class = "current-language";
        html += (<span key={lang.url}><a className={current_lang_class} href="#" onClick={(e) => this.setLang(lang.url, e)}>{lang.short_lang}</a>&nbsp;&nbsp;</span>);
      }
    );
    return html;
  }

  render() {
    let all_languages = getAllLanguages();
    return (
      <Navbar bg="light" variant="light" expand="sm">
        <Navbar.Toggle />
        <Navbar.Collapse className="mr-auto">
          <Nav.Link href="/">{getLangString(languages, this.state.current_lang, 'home_page')}</Nav.Link>
          <ButtonToolbar>
            <Button variant="primary" size="sm" href="/docs">{getLangString(languages, this.state.current_lang, 'docs_page')}</Button>
          </ButtonToolbar>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <div className="lang-select">
            {
              all_languages.map(
                (lang) => (                  
                  <span key={lang.url}><a className={lang.url == this.state.current_lang && "current-language"} href="#" onClick={(e) => this.setLang(lang.url, e)}>{lang.short_lang}</a>&nbsp;&nbsp;</span>
                )
              )
            }
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;