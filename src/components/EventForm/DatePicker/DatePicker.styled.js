import styled from 'styled-components';
import { colors } from '../../../vars';

export const Wrap = styled.div`
  width: 240px;
  height: 348px;
  border-radius: 11px;
  background: ${colors.white};
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
`;

export const Select = styled.div`
  width: 240px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  background: ${colors.white};

  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;
`;

export const SelectText = styled.p`
  color: ${colors.accent};
  font-size: 16px;
  line-height: 1.5;
`;
