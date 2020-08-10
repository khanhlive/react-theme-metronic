import React from "react";
import classnames from "classnames";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as I18nActions from "../I18nActions";

class LanguageSelector extends React.Component {
  render() {
    let languages = this.props.languages;
    let language = this.props.language;
    if (!this.props.language) return <div />;
    return (
      <ul className="header-dropdown-list hidden-xs ng-cloak">
        <li className="dropdown">
          <a href="#/" className="dropdown-toggle" data-toggle="dropdown">
            <img
              src="assets/img/blank.gif"
              className={classnames(["flag", "flag-" + language.key])}
              alt={language.alt}
            />
            <span>&nbsp;{language.title}&nbsp;</span>
            <i className="fa fa-angle-down" />
          </a>
          <ul className="dropdown-menu pull-right">
            {languages.map((lang, idx) => {
              return (
                <li
                  key={idx}
                  className={classnames({
                    active: lang.key === language.key
                  })}
                >
                  <a href="#/" onClick={e=>this.selectLanguage(lang)}>
                    <img
                      src="assets/img/blank.gif"
                      className={classnames(["flag", "flag-" + lang.key])}
                      alt={lang.alt}
                    />
                    &nbsp;
                    <span>{lang.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  }
  selectLanguage = language => {
    this.props.i18nSelect(language);
  };
}

export default connect(
  store => store.i18n,
  dispatch => bindActionCreators(I18nActions, dispatch)
)(LanguageSelector);
