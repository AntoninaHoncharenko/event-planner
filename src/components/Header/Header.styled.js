import styled from 'styled-components';
import { colors } from '../../helpers/vars';

export const HeaderWrap = styled.header`
  padding: 32px 0 24px;
  border-bottom: 1px solid ${colors.accent};

  @media (min-width: 768px) {
    padding: 26px 0 18px;
  }
  @media (min-width: 1440px) {
    padding: 22px 0;
  }
`;

export const Title = styled.h1`
  color: ${colors.accent};
  font-family: 'Alata';
  font-size: 24px;
  line-height: normal;
`;

export const Wrap = styled.div`
  display: flex;
  width: 272px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    flex-wrap: nowrap;
  }
`;

export const InputWrap = styled.div`
  width: 272px;
  height: 48px;
  margin-top: 24px;
  position: relative;

  @media (min-width: 768px) {
    width: 368px;
    margin-top: 0;
    max-lines: auto;
  }
  @media (min-width: 1440px) {
    width: 410px;
  }
`;

export const Input = styled.input`
  width: 272px;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 17px 17px 17px 48px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: ${colors.accent};
  font-size: 14px;
  line-height: 1;

  position: absolute;
  cursor: pointer;

  &::placeholder {
    color: #888;
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
  }

  @media (min-width: 768px) {
    width: 368px;
  }
  @media (min-width: 1440px) {
    width: 410px;
  }
`;

export const Label = styled.label`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 3;
  cursor: pointer;
`;
