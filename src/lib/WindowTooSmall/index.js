import React from 'react';
import PropTypes from 'prop-types';
import UAParser from 'ua-parser-js';
import debounce from 'lodash.debounce';

import { Section, Icon, Title, Description } from './styles';

const device = new UAParser().getResult().device.type;

class WindowTooSmall extends React.Component {
  static propTypes = {
    minWidth: PropTypes.number.isRequired,
    minHeight: PropTypes.number.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    fontColor: '#000',
    backgroundColor: '#FFF',
    zIndex: 10000,
  };

  state = {
    active: false,
  }

  componentWillMount() {
    window.addEventListener('resize', debounce(this.onResize, 50));
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
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
  }

  render() {
    const {
      icon,
      title,
      description,
      fontColor,
      backgroundColor,
      backgroundImage,
      zIndex,
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
        {icon && <Icon src={icon} />}
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Section>
    );
  }
}

export { WindowTooSmall };