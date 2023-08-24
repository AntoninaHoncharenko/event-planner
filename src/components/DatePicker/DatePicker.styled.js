import styled from 'styled-components';
import { colors } from '../../helpers/vars';

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const CancelBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${colors.accent};
  background-color: ${colors.white};
  cursor: pointer;

  color: ${colors.accent};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

export const ChooseBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${colors.accent};
  border: none;
  cursor: pointer;

  color: ${colors.white};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;
