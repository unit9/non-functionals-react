import styled from 'styled-components';

import BaseWrapper from './../../styles/Wrapper';
import {
  Section as BaseSection,
  Icon as BaseIcon,
} from './../../styles/shared';

const Section = styled(BaseSection)`

`;

const Wrapper = styled(BaseWrapper)`

  text-align: center;
  width: 75%;

`;

const Icon = styled(BaseIcon)`

  vertical-align: middle;

  margin: ${({ orientation }) => orientation === 'landscape' ? '0 30px 0 0' : '0 0 30px 0'};

`;

const Title = styled.h1`

  display: ${({ orientation }) => orientation === 'landscape' ? 'inline-block' : 'block'};
  vertical-align: middle;

  text-align: ${({ orientation, iconExists }) =>
    orientation === 'landscape' && iconExists
      ? 'left'
      : 'center'};

  font-size: 22px;

  max-width:  ${({ orientation }) => orientation === 'landscape' ? '40%' : '75%'};
  margin: 0 auto;

`;

export { Section, Wrapper, Icon, Title };
