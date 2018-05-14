import React from 'react';
import PropTypes from 'prop-types';
import UAParser from 'ua-parser-js';

import { Section, Img, Title } from './styles';

const device = new UAParser().getResult().device.type;

class RotateDevice extends React.PureComponent {
  static propTypes = {
    mobileOrientation: PropTypes.string.isRequired,
    mobileIcon: PropTypes.string,
    mobileTitle: PropTypes.string.isRequired,
    tabletOrientation: PropTypes.string.isRequired,
    tabletIcon: PropTypes.string,
    tabletTitle: PropTypes.string.isRequired,
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

    window.addEventListener('resize', this.onResize);
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
    const { background, fontColor, backgroundColor, backgroundImage, zIndex } = this.props;
    const { active, title, icon, orientation } = this.state;

    return (
      <Section
        active={active}
        orientation={orientation}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        zIndex={zIndex}
      >
        {icon && <Img src={icon} />}
        <Title
          fontColor={fontColor}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Section>
    );
  }
}

export { RotateDevice };