import React from 'react';
import PropTypes from 'prop-types';
import UAParser from 'ua-parser-js';
import debounce from 'lodash.debounce';
import isHtml from "is-html";

import { Section, Wrapper, Icon, Title } from './styles';

const device = new UAParser().getResult().device.type;

class RotateDevice extends React.PureComponent {
  static propTypes = {
    mobileOrientation: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    mobileIcon: PropTypes.string,
    mobileTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    tabletOrientation: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    tabletIcon: PropTypes.string,
    tabletTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    mobileOrientation: 'portrait',
    tabletOrientation: 'landscape',
    backgroundColor: '#FFF',
    fontColor: '#000',
    zIndex: 10000,
  }

  state = {
    active: false,
    orientation: null,
    title: null,
    icon: null,
  }

  componentWillMount() {
    const { mobileIcon, mobileTitle, tabletIcon, tabletTitle } = this.props;
    if (device === 'mobile') {
      this.setState({ title: mobileTitle, icon: mobileIcon });
    }
    if (device === 'tablet') {
      this.setState({ title: tabletTitle, icon: tabletIcon });
    }

    window.addEventListener('resize', debounce(this.onResize, 50));
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const { mobileOrientation, tabletOrientation } = this.props;
    const orientation =
      window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

    if (
      (device === 'mobile' && orientation !== mobileOrientation) ||
      (device === 'tablet' && orientation !== tabletOrientation)
    ) {
      this.setState({ active: true, orientation });
    } else {
      this.setState({ active: false, orientation });
    }
  }

  render() {
    const { fontColor, backgroundColor, backgroundImage, zIndex } = this.props;
    const { active, title, icon, orientation } = this.state;

    return (
      <Section
        className="RotateDevice"
        active={active}
        orientation={orientation}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        fontColor={fontColor}
        zIndex={zIndex}
      >
        <Wrapper>
          {icon &&
            <Icon
              className="RotateDevice-Icon"
              src={icon}
              orientation={orientation}
            />}
          {isHtml(title) ? (
            <Title
              className="RotateDevice-Title"
              dangerouslySetInnerHTML={{ __html: title }}
              orientation={orientation}
              iconExists={icon !== undefined}
            />
          ) : (
            <Title
              className="RotateDevice-Title"
              orientation={orientation}
              iconExists={icon !== undefined}
            >
              {title}
            </Title>
          )}
        </Wrapper>
      </Section>
    );
  }
}

export { RotateDevice };