import styled from 'styled-components';
import { colors } from '../../helpers/vars';

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
  color: ${props => (!props.value && !props.Date ? '#7B61FF' : '#3F3F3F')};
  font-size: 16px;
  line-height: 1.5;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 16px;
  left: 204px;

  @media (min-width: 768px) {
    left: 272px;
  }

  @media (min-width: 1440px) {
    left: 336px;
  }

  svg {
    stroke: ${colors.accent};
  }
`;

export const Input = styled.input`
  width: 240px;
  height: 56px;
  padding: 16px 36px 16px 12px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  outline: none;

  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1440px) {
    width: 372px;
  }

  &:focus {
    border-color: ${colors.accent};
  }

  &::placeholder {
    color: ${colors.accent};
  }
`;
