import styled from 'styled-components';
import { colors } from '../../helpers/vars';

export const Select = styled.div`
  width: 240px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  background-color: ${colors.white};
  cursor: pointer;

  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1440px) {
    width: 372px;
  }
`;

export const SelectText = styled.p`
  color: ${props => (!props.value && !props.Date ? '#7B61FF' : '#3F3F3F')};
  font-size: 16px;
  line-height: 1.5;
`;
