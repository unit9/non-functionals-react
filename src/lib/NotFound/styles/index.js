import styled from 'styled-components';

import {
  Section as BaseSection,
  Icon as BaseIcon,
  Description as BaseDescription,
  Cta as BaseCta,
} from './../../styles/shared';

const Section = styled(BaseSection)`

  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
  display: inherit;

`;

const Icon = styled(BaseIcon)`

`;

const Title = styled.h1`

  font-size: 100px;
  margin: 0 0 30px 0;

  @media (max-width: 600px) {
    font-size: 60px;
  }

`;

const Subtitle = styled.h2`

  font-size: 32px;
  margin: 0 auto 10px auto;
  max-width: 600px;

  @media (max-width: 600px) {
    font-size: 22px;
  }

`;

const Description = styled(BaseDescription)`

  margin: 0 auto 30px auto;
  max-width: 600px;
  opacity: 0.5;

`;

const Cta = styled(BaseCta)`

  font-size: 22px;

`;

export { Section, Icon, Title, Subtitle, Description, Cta };
