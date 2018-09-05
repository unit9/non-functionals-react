import React from 'react';
import PropTypes from 'prop-types';
import isWebglEnabled from 'detector-webgl';
import isHtml from "is-html";

import { Section, Icon, Title, Description, Wrapper } from './styles';

class WebGLNotEnabled extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { active: !isWebglEnabled };
  }

  render() {
    const {
      icon,
      title,
      description,
    } = this.props;

    const { active } = this.state;

    return (
      <Section
        className="WebGLNotEnabled NonFunctionals"
        active={active}
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
