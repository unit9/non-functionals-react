import React from 'react';
import PropTypes from 'prop-types';
import isHtml from "is-html";

import Wrapper from '../styles/Wrapper';
import { Section, Icon, Title, Subtitle, Description, Cta } from './styles';

class NotFound extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    cta: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    ctaBackgroundColor: PropTypes.string,
    ctaFontColor: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.number,
    onContinue: PropTypes.func.isRequired,
  };

  static defaultProps = {
    fontColor: '#000',
    ctaBackgroundColor: '#000',
    ctaFontColor: '#FFF',
    backgroundColor: '#FFF',
    zIndex: 10000,
  };

  render() {
    const {
      icon,
      title,
      subtitle,
      description,
      cta,
      fontColor,
      ctaBackgroundColor,
      ctaFontColor,
      backgroundColor,
      backgroundImage,
      zIndex,
      onContinue,
    } = this.props;

    return (
      <Section
        className="NotFound"
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        fontColor={fontColor}
        zIndex={zIndex}
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
            backgroundColor={ctaBackgroundColor}
            fontColor={ctaFontColor}
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