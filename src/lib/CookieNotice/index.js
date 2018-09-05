import React from "react";
import PropTypes from "prop-types";
import isHtml from "is-html";

import { Section, Text, Close } from "./styles";

class CookieNotice extends React.Component {
  static propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    zIndex: PropTypes.number,
    onCloseClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
  };

  static defaultProps = {
    fontColor: "#000",
    backgroundColor: "#FFF",
    zIndex: 10000,
    active: true,
  };

  render() {
    const {
      text,
      fontColor,
      backgroundColor,
      zIndex,
      onCloseClick,
      active,
    } = this.props;

    return (
      <Section
        className="CookieNotice"
        active={active}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        zIndex={zIndex}
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
        <Close fontColor={fontColor} onClick={() => onCloseClick()} />
      </Section>
    );
  }
}

export { CookieNotice };
