import styled from 'styled-components';
import { colors } from '../../../vars';

export const Wrap = styled.div`
  width: 240px;
  height: 348px;
  border-radius: 11px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1440px) {
    width: 372px;
  }
`;

export const Select = styled.div`
  width: 240px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  background-color: ${colors.white};

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
  color: ${colors.accent};
  font-size: 16px;
  line-height: 1.5;
`;
