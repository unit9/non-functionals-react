import React from 'react';
import PropTypes from 'prop-types';
import isWebglEnabled from 'detector-webgl';
import isHtml from "is-html";

import Wrapper from '../styles/Wrapper';
import { Section, Icon, Title, Description } from './styles';

class WebGLNotEnabled extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
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
    this.setState({ active: !isWebglEnabled });
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
        className="WebGLNotEnabled"
        active={active}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        fontColor={fontColor}
        zIndex={zIndex}
      >
        <Wrapper>
          {icon && <Icon className="WebGLNotEnabled-Icon" src={icon} />}
          <Title className="WebGLNotEnabled-Title">{title}</Title>
          {isHtml(description) ? (
            <Description
              className="WebGLNotEnabled-Description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <Description className="WebGLNotEnabled-Description">
              {description}
            </Description>
          )}
        </Wrapper>
      </Section>
    );
  }
}

export { WebGLNotEnabled };