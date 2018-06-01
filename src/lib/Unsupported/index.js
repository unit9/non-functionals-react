import React from 'react';
import PropTypes from 'prop-types';

import BrowserDetection from './BrowserDetection';

import Wrapper from '../styles/Wrapper';
import { Section, Icon, Title, Description, UnsupportedIcons, Cta } from './styles';

class Unsupported extends React.Component {
  static propTypes = {
    supported: PropTypes.shape({
      desktop: PropTypes.arrayOf(PropTypes.shape({
        browser: PropTypes.string.isRequired,
        minVersion: PropTypes.number.isRequired
      })),
      tablet: PropTypes.arrayOf(PropTypes.shape({
        os: PropTypes.string.isRequired,
        browser: PropTypes.string.isRequired,
      })),
      mobile: PropTypes.arrayOf(PropTypes.shape({
        os: PropTypes.string.isRequired,
        browser: PropTypes.string.isRequired,
      })),
    }).isRequired,
    icon: PropTypes.string,
    unsupportedIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
    unsupportedIconsMobile: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    mobileTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mobileDescription: PropTypes.string.isRequired,
    socialInstructions: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    ctaBackgroundColor: PropTypes.string,
    ctaFontColor: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    fontColor: '#000',
    ctaBackgroundColor: '#000',
    ctaFontColor: '#FFF',
    backgroundColor: '#FFF',
    zIndex: 10000,
  };

  state = {
    active: false,
    title: null,
    icons: null,
    description: null,
  }

  componentWillMount() {
    const {
      supported,
      title,
      mobileTitle,
      unsupportedIcons,
      unsupportedIconsMobile,
      description,
      mobileDescription,
    } = this.props;

    this.browserDetection = new BrowserDetection(supported);

    window.browserDetection = this.browserDetection;

    const { type } = this.browserDetection;
    if (type === 'mobile' || type === 'tablet') {
      this.setState({
        title: mobileTitle,
        icons: unsupportedIconsMobile,
        description: mobileDescription
      });
    } else {
      this.setState({ title, icons: unsupportedIcons, description });
    }

    if (!this.browserDetection.isSupported()) {
      this.setState({ active: true });
    }
  }

  render() {
    const {
      icon,
      socialInstructions,
      cta,
      fontColor,
      ctaBackgroundColor,
      ctaFontColor,
      backgroundColor,
      backgroundImage,
      zIndex,
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
          <Title
            className="Unsupported-Title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <UnsupportedIcons className="Unsupported-UnsupportedIcons">
            {icons.map((icon) => <img src={icon} key={icon} />)}
          </UnsupportedIcons>
          <Description
            className="Unsupported-Description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {this.browserDetection.isAppBrowser() &&
            <Description
              className="Unsupported-SocialInstructions"
              dangerouslySetInnerHTML={{ __html: socialInstructions }}
            />}
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