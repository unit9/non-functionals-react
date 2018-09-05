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
  };

  static defaultProps = {
    mobileOrientation: 'portrait',
    tabletOrientation: 'landscape',
  }

  constructor(props) {
    super(props);
    const { mobileIcon, mobileTitle, tabletIcon, tabletTitle } = props;

    let initialState = {
      active: false,
      orientation: null,
      title: null,
      icon: null,
    };

    if (device === 'mobile') {
      initialState = { ...initialState, title: mobileTitle, icon: mobileIcon };
    }
    if (device === 'tablet') {
      initialState = { ...initialState, title: tabletTitle, icon: tabletIcon };
    }

    this.state = { ...initialState };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = debounce(() => {
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
  }, 500);

  render() {
    const { active, title, icon, orientation } = this.state;

    return (
      <Section
        className="RotateDevice NonFunctionals"
        active={active}
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
