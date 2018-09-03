import React from "react";
import PropTypes from "prop-types";
import UAParser from "ua-parser-js";
import debounce from "lodash.debounce";
import isHtml from "is-html";

import Wrapper from "../styles/Wrapper";
import { Section, Icon, Title, Description } from "./styles";

const device = new UAParser().getResult().device.type;

class WindowTooSmall extends React.Component {
  static propTypes = {
    minWidth: PropTypes.number.isRequired,
    minHeight: PropTypes.number.isRequired,
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.number
  };

  static defaultProps = {
    fontColor: "#000",
    backgroundColor: "#FFF",
    zIndex: 10000
  };

  state = {
    active: false
  };

  componentWillMount() {
    window.addEventListener("resize", debounce(this.onResize, 50));
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const { minWidth, minHeight } = this.props;

    if (
      !device &&
      (window.innerWidth < minWidth || window.innerHeight < minHeight)
    ) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    const {
      icon,
      title,
      description,
      fontColor,
      backgroundColor,
      backgroundImage,
      zIndex
    } = this.props;

    const { active } = this.state;

    return (
      <Section
        className="WindowTooSmall"
        active={active}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        fontColor={fontColor}
        zIndex={zIndex}
      >
        <Wrapper>
          {icon && <Icon className="WindowTooSmall-Icon" src={icon} />}
          <Title className="WindowTooSmall-Title">{title}</Title>
          {isHtml(description) ? (
            <Description
              className="WindowTooSmall-Description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <Description className="WindowTooSmall-Description">
              {description}
            </Description>
          )}
        </Wrapper>
      </Section>
    );
  }
}

export { WindowTooSmall };
