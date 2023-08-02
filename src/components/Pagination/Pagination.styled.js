import styled from 'styled-components';
import { colors } from '../../vars';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 272px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const ArrowBtn = styled.button`
  width: 40px;
  height: 40px;
  padding: 8px;
  background-color: ${colors.white};
  border: none;

  color: ${colors.accent};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

export const NumberBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.white};
  border: none;

  color: ${colors.accent};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;
