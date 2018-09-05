import React from 'react';
import PropTypes from 'prop-types';
import isHtml from "is-html";

import { Section, Icon, Title, Subtitle, Description, Cta, Wrapper } from './styles';

class NotFound extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    cta: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    onContinue: PropTypes.func.isRequired,
  };

  render() {
    const {
      icon,
      title,
      subtitle,
      description,
      cta,
      onContinue,
    } = this.props;

    return (
      <Section
        className="NotFound NonFunctionals"
      >
        <Wrapper>
          {icon && <Icon src={icon} className="NotFound-Icon" />}
          {isHtml(title) ? (
            <Title
              className="NotFound-Title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <Title className="NotFound-Title">
              {title}
            </Title>
          )}
          {isHtml(subtitle) ? (
            <Subtitle
              className="NotFound-Subtitle"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          ) : (
            <Subtitle className="NotFound-Subtitle">
              {subtitle}
            </Subtitle>
          )}
          {isHtml(description) ? (
            <Description
              className="NotFound-Description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <Description className="NotFound-Description">
              {description}
            </Description>
          )}
          <Cta
            className="NotFound-Cta"
            onClick={() => onContinue()}
          >
            {cta}
          </Cta>
        </Wrapper>
      </Section>
    );
  }
}

export { NotFound };
