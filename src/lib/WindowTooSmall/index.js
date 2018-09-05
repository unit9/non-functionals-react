import React from "react";
import PropTypes from "prop-types";
import UAParser from "ua-parser-js";
import debounce from "lodash.debounce";
import isHtml from "is-html";

import { Section, Icon, Title, Description, Wrapper } from "./styles";

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
  };

  state = {
    active: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = debounce(() => {
    const { minWidth, minHeight } = this.props;

    if (
      !device &&
      (window.innerWidth < minWidth || window.innerHeight < minHeight)
    ) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }, 500);

  render() {
    const {
      icon,
      title,
      description,
    } = this.props;

    const { active } = this.state;

    return (
      <Section
        className="WindowTooSmall NonFunctionals"
        active={active}
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
