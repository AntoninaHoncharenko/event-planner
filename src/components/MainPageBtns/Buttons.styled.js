import styled from 'styled-components';
import { colors } from '../../vars';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  position: relative;
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

export const CategoryFilter = styled.div`
  width: 158px;
  height: 294px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0px;
  left: 55px;
  z-index: 3;
`;

export const FilterList = styled.div`
  width: 158px;
  height: 276px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0px;
  left: 55px;
  z-index: 3;
`;

export const CategoryTitleWrap = styled.div`
  display: flex;
  gap: 4px;
  width: 158px;
  height: 56px;
  padding: 16px 21px;
  border-bottom: 1px solid ${colors.divider};
`;

export const FilterTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 158px;
  height: 56px;
  padding: 16px 21px;
  border-bottom: 1px solid ${colors.divider};
`;

export const CategoryTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: ${colors.accent};
`;

export const CategoryItem = styled.li`
  padding: 8px 24px;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.divider};
    margin-bottom: 4px;
  }

  &:first-child {
    margin-top: 4px;
  }

  color: ${colors.divider};
  font-size: 14px;
  line-height: 1;
`;

export const FilterItem = styled.li`
  padding: 4px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${colors.divider};
  font-size: 14px;
  line-height: 1;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.divider};
    margin-bottom: 4px;
  }

  &:first-child {
    margin-top: 4px;
  }

  &:nth-child(even) {
    svg {
      transform: rotateX(180deg);
    }
  }
`;
