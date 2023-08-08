import styled from 'styled-components';
import { colors } from '../../helpers/vars';

export const Title = styled.h2`
  color: ${colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
