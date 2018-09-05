import styled from 'styled-components';

import {
  Section as BaseSection,
  Icon as BaseIcon,
  Cta as BaseCta,
} from './../../styles/shared';

const Section = styled(BaseSection)`

  padding: 0 20px;
  box-sizing: border-box;

  font-size: ${({ type }) => type === 'mobile' ? '16px' : '22px'};
  text-align: center;

  @media (max-height: 500px) {
    font-size: 10px;
  }

`;

const Icon = styled(BaseIcon)`

  width: ${({ type }) => type === 'mobile' ? '65px' : 'auto'};

  @media (max-height: 500px) {
    margin-bottom: 10px;
    width: 50px;
  }

`;

const Title = styled.p`

  margin: 0 0 30px 0;

  @media (max-height: 500px) {
    margin-bottom: 10px;
  }

`;

const UnsupportedIcons = styled.div`

  margin-bottom: 30px;

  div {
    display: inline-block;
    vertical-align: top;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  img {
    height: 50px;
    max-width: 50px;
  }

  span {
    margin-top: 15px;
    display: block;
  }

  @media (max-height: 500px) {
    div {
      margin-bottom: 10px;
    }

    img {
      max-width: 35px;
    }
  }

`;

const Description = styled.p`

  margin: 0 auto 30px auto;
  max-width: 600px;

  @media (max-height: 500px) {
    margin-bottom: 15px;
  }

`;

const Cta = styled(BaseCta)`

  @media (max-height: 500px) {
    padding: 10px 30px;
  }

`;

export { Section, Icon, Title, Description, Cta, UnsupportedIcons };
