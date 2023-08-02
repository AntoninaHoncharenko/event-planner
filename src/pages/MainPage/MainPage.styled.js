import styled from 'styled-components';
import { colors } from '../../vars';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(src/assets/bg-mob.png);
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  padding: 44px 0 42px;
`;

export const BtnWrap = styled.div`
  width: 216px;
  display: flex;
  gap: 24px;
  margin-left: auto;
  margin-bottom: 40px;
`;

export const FilterBtn = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const PlusBtn = styled(Link)`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.accent};
  padding: 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;
