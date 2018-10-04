import React from "react";
import PropTypes from "prop-types";
import isHtml from "is-html";

import BrowserDetection from "./BrowserDetection";

import {
  Section,
  Icon,
  Title,
  Description,
  UnsupportedIcons,
  Cta,
  Wrapper
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
    unsupportedIcons: PropTypes.arrayOf(PropTypes.object),
    unsupportedIconsMobile: PropTypes.arrayOf(PropTypes.object),
    unsupportedIconsTablet: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    mobileTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    tabletTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    mobileDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    tabletDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    socialInstructions: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    cta: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    forceActive: PropTypes.bool
  };

  static defaultProps = {
    forceActive: false,
  };

  constructor(props) {
    super(props);

    const {
      supported,
      title,
      mobileTitle,
      tabletTitle,
      unsupportedIcons,
      unsupportedIconsMobile,
      unsupportedIconsTablet,
      description,
      mobileDescription,
      tabletDescription,
      forceActive
    } = props;

    this.browserDetection = new BrowserDetection(supported);

    let initialState = {
      active: forceActive,
      title: null,
      icons: null,
      description: null
    };

    const { type } = this.browserDetection;
    if (type === "tablet") {
      initialState = {
        ...initialState,
        title: tabletTitle ? tabletTitle : mobileTitle,
        icons: unsupportedIconsTablet ? unsupportedIconsTablet : unsupportedIconsMobile,
        description: tabletDescription ? tabletDescription : mobileDescription
      };
    } else if (type === "mobile") {
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
    } = this.props;

    const { active, title, icons, description } = this.state;

    return (
      <Section
        className="Unsupported NonFunctionals"
        active={active}
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
          {icons &&
            <UnsupportedIcons className="Unsupported-UnsupportedIcons">
              {icons.map((icon) => (
                <div key={icon.label}>
                  <img src={icon.image} />
                  {icon.label && <span>{icon.label}</span>}
                </div>
              ))}
            </UnsupportedIcons>
          }
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
