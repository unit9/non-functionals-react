import React from "react";
import PropTypes from "prop-types";
import isHtml from "is-html";

import { Section, Text, Close } from "./styles";

class CookieNotice extends React.Component {
  static propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    onCloseClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
  };

  static defaultProps = {
    active: true,
  };

  render() {
    const {
      text,
      onCloseClick,
      active,
    } = this.props;

    return (
      <Section
        className="CookieNotice NonFunctionals"
        active={active}
      >
        {isHtml(text) ? (
          <Text
            className="CookieNotice-Text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ) : (
          <Text className="CookieNotice-Text">
            {text}
          </Text>
        )}
        <Close onClick={() => onCloseClick()} />
      </Section>
    );
  }
}

export { CookieNotice };
