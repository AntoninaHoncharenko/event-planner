import styled from 'styled-components';
import { colors } from '../../helpers/vars';

export const List = styled.ul`
  margin-bottom: 40px;
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MoreBtn = styled.button`
  display: none;
  width: 114px;
  height: 40px;
  padding: 10px 24px;
  border-radius: 8px;
  background-color: ${colors.accent};
  border: none;
  margin-top: 8px;
  margin-left: auto;
  transition: 300ms linear;
  cursor: pointer;

  color: ${colors.white};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover {
    background-color: #6243ff;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
  transition: 300ms linear;
`;

export const InfoWrap = styled.div`
  width: 100%;
  height: 150px;
  padding: 16px;
  background-color: ${colors.white};
  transition: 300ms linear;
`;

export const Card = styled.li`
  width: 272px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 332px;
  }

  @media (min-width: 1440px) {
    width: 302px;
  }

  &:hover ${MoreBtn} {
    display: block;
  }

  &:hover ${Overlay} {
    transform: translateY(-56px);
  }

  &:hover ${InfoWrap} {
    transform: translateY(-56px);
  }
`;

export const ImgThumb = styled.div`
  width: 100%;
  height: 336px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const MarksWrap = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const Category = styled.p`
  height: 32px;
  padding: 6px 12px;
  margin-right: 12px;
  background-color: ${colors.white};
  border-radius: 8px;
  color: ${colors.accent};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const Priority = styled.p`
  height: 32px;
  padding: 6px 12px;
  background-color: ${colors.white};
  border-radius: 8px;
  color: ${props => {
    switch (props.priority) {
      case 'High':
        return '#FF2B77';
      case 'Medium':
        return '#E2A300';
      default:
        return '#6BD475';
    }
  }};

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const DetailsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.accent};
  font-size: 14px;
  line-height: 1.71;
`;

export const Title = styled.h2`
  color: #1c1b1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  width: 240px;
  height: 78px;
  color: #49454f;
  font-size: 14px;
  line-height: 1.42;
`;
