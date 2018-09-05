import styled from 'styled-components';

import {
  Section as BaseSection,
  Icon as BaseIcon,
  Wrapper as BaseWrapper,
} from './../../styles';

export const Section = styled(BaseSection)`

`;

export const Wrapper = styled(BaseWrapper)`

  text-align: center;
  width: 75%;

`;

export const Icon = styled(BaseIcon)`

  vertical-align: middle;

  margin: ${({ orientation }) => orientation === 'landscape' ? '0 30px 0 0' : '0 0 30px 0'};

`;

export const Title = styled.h1`

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
