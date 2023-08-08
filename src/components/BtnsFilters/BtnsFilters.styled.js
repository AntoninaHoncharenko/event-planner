import styled from 'styled-components';
import { colors } from '../../helpers/vars';
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

  @media (min-width: 768px) {
    width: 513px;
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    width: 513px;
    margin-bottom: 0px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;

  &:hover {
    svg {
      stroke: ${colors.accent};
    }

    p {
      color: ${colors.accent};
    }
  }

  svg {
    stroke: ${props => (props.category ? '#7B61FF' : '#3F3F3F')};
    transition: 300ms linear;

    &:hover {
      stroke: ${colors.accent};
    }
  }

  @media (min-width: 768px) {
    width: 143px;
  }
`;

export const SortBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;

  &:hover {
    svg {
      stroke: ${colors.accent};
    }

    p {
      color: ${colors.accent};
    }
  }

  svg {
    stroke: ${props => (props.sortValue ? '#7B61FF' : '#3F3F3F')};
    transition: 300ms linear;

    &:hover {
      stroke: ${colors.accent};
    }
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;

export const FilterButtonText = styled.p`
  color: ${props => (props.category ? '#7B61FF' : '#3F3F3F')};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  transition: 300ms linear;
`;

export const PlusBtn = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.accent};
  padding: 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 193px;
  }
`;

export const PlusBtnText = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
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

  @media (min-width: 768px) {
    left: 175px;
  }

  @media (min-width: 1440px) {
    left: 0px;
  }
`;

export const FilterList = styled.div`
  width: 170px;
  height: 276px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0px;
  left: 21px;
  z-index: 3;

  @media (min-width: 768px) {
    width: 158px;
    left: 328px;
  }

  @media (min-width: 1440px) {
    left: 153px;
  }
`;

export const CategoryTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 158px;
  height: 56px;
  padding: 16px 21px;
  border-bottom: 1px solid ${colors.divider};
  cursor: pointer;

  svg {
    stroke: ${colors.accent};
  }
`;

export const FilterTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  height: 56px;
  padding: 16px 21px;
  border-bottom: 1px solid ${colors.divider};
  cursor: pointer;

  svg {
    stroke: ${colors.accent};
  }

  @media (min-width: 768px) {
    width: 158px;
  }
`;

export const CategoryTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: ${colors.accent};

  @media (min-width: 768px) {
    order: -1;
  }
`;

export const CategoryItem = styled.li`
  height: 30px;
  padding: 8px 24px;

  &:first-child {
    margin-top: 4px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.divider};
    margin-bottom: 4px;
  }

  color: ${props =>
    props.category === props.categoryValue ? '#7B61FF' : '#ACA7C3'};
  font-size: 14px;
  line-height: 1;
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
  }
`;

export const FilterItem = styled.li`
  padding: 4px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${props => (props.sort === props.value ? '#7B61FF' : '#ACA7C3')};
  font-size: 14px;
  line-height: 1;

  svg {
    stroke: ${props => (props.sort === props.value ? '#7B61FF' : '#ACA7C3')};
  }

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
