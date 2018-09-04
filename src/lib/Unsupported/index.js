import React from "react";
import PropTypes from "prop-types";
import isHtml from "is-html";

import BrowserDetection from "./BrowserDetection";

import Wrapper from "../styles/Wrapper";
import {
  Section,
  Icon,
  Title,
  Description,
  UnsupportedIcons,
  Cta
} from "./styles";

class Unsupported extends React.Component {
  static propTypes = {
    supported: PropTypes.shape({
      desktop: PropTypes.arrayOf(
        PropTypes.shape({
          browser: PropTypes.string.isRequired,
          minVersion: PropTypes.number.isRequired
        })
      ),
      tablet: PropTypes.arrayOf(
        PropTypes.shape({
          os: PropTypes.string.isRequired,
          browser: PropTypes.string.isRequired
        })
      ),
      mobile: PropTypes.arrayOf(
        PropTypes.shape({
          os: PropTypes.string.isRequired,
          browser: PropTypes.string.isRequired
        })
      )
    }).isRequired,
    icon: PropTypes.string,
    unsupportedIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
    unsupportedIconsMobile: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    mobileTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    mobileDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    socialInstructions: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    cta: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    ctaBackgroundColor: PropTypes.string,
    ctaFontColor: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.number
  };

  static defaultProps = {
    fontColor: "#000",
    ctaBackgroundColor: "#000",
    ctaFontColor: "#FFF",
    backgroundColor: "#FFF",
    zIndex: 10000
  };

  constructor(props) {
    super(props);

    const {
      supported,
      title,
      mobileTitle,
      unsupportedIcons,
      unsupportedIconsMobile,
      description,
      mobileDescription
    } = props;

    this.browserDetection = new BrowserDetection(supported);
    window.browserDetection = this.browserDetection;
    let initialState = {
      active: false,
      title: null,
      icons: null,
      description: null
    };

    const { type } = this.browserDetection;
    if (type === "mobile" || type === "tablet") {
      initialState = {
        ...initialState,
        title: mobileTitle,
        icons: unsupportedIconsMobile,
        description: mobileDescription
      };
    } else {
      initialState = { ...initialState, title, icons: unsupportedIcons, description };
    }

    if (!this.browserDetection.isSupported()) {
      initialState = { ...initialState, active: true };
    }

    this.state = { ...initialState };
  }

  renderSocialInstructions = () => {
    const { socialInstructions } = this.props;

    if (!this.browserDetection.isAppBrowser()) return null;

    return isHtml(socialInstructions) ? (
      <Description
        className="Unsupported-Description"
        dangerouslySetInnerHTML={{ __html: socialInstructions }}
      />
    ) : (
      <Description className="Unsupported-Description">
        {socialInstructions}
      </Description>
    );
  };

  render() {
    const {
      icon,
      cta,
      fontColor,
      ctaBackgroundColor,
      ctaFontColor,
      backgroundColor,
      backgroundImage,
      zIndex
    } = this.props;

    const { active, title, icons, description } = this.state;

    return (
      <Section
        className="Unsupported"
        active={active}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        fontColor={fontColor}
        zIndex={zIndex}
        type={this.browserDetection.type}
      >
        <Wrapper>
          {icon && <Icon src={icon} type={this.browserDetection.type} />}
          {isHtml(title) ? (
            <Title
              className="Unsupported-Title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <Title className="Unsupported-Title">
              {title}
            </Title>
          )}
          <UnsupportedIcons className="Unsupported-UnsupportedIcons">
            {icons.map((icon) => (
              <div key={icon.label}>
                <img src={icon.image} />
                {icon.label && <span>{icon.label}</span>}
              </div>
            ))}
          </UnsupportedIcons>
          {isHtml(description) ? (
            <Description
              className="Unsupported-Description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <Description className="Unsupported-Description">
              {description}
            </Description>
          )}
          {this.renderSocialInstructions()}
          <Cta
            className="Unsupported-Cta"
            backgroundColor={ctaBackgroundColor}
            fontColor={ctaFontColor}
            onClick={() => this.setState({ active: false })}
          >
            {cta}
          </Cta>
        </Wrapper>
      </Section>
    );
  }
}

export { Unsupported };
