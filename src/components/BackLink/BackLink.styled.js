import styled from 'styled-components';
import { colors } from '../../vars';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
  display: flex;
  width: 67px;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const BackText = styled.p`
  color: ${colors.accent};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;
