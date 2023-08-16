import styled from 'styled-components';
import { colors } from '../../helpers/vars';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  color: ${colors.text};
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 14px;
  margin-left: 326px;
`;

export const Card = styled.div`
  width: 272px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 688px;
  }

  @media (min-width: 1440px) {
    width: 628px;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 168px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 272px;
  }
`;

export const InfoWrap = styled.div`
  padding: 24px 16px 40px;

  @media (min-width: 768px) {
    padding: 24px 24px 40px;
  }

  @media (min-width: 1440px) {
    padding: 20px 10px 40px;
  }
`;

export const Text = styled.p`
  color: #49454f;
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 24px;
`;

export const MarksWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const Mark = styled.li`
  height: 32px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

  color: ${props => {
    switch (props.priority) {
      case 'High':
        return '#FF2B77';
      case 'Medium':
        return '#E2A300';
      case 'Low':
        return '#6BD475';
      default:
        return '#7B61FF';
    }
  }};

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const EventDate = styled.p`
  width: 142px;
  height: 32px;
  padding: 4px 10px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

  color: ${colors.accent};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 179px;
    margin-left: auto;
    margin-top: 0;
  }
`;

export const EditBtn = styled(Link)`
  width: 108px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${colors.white};
  border: 1px solid ${colors.accent};
  transition: 300ms linear;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 55px;
  }

  &:hover {
    background-color: #fefcff;
  }

  color: ${colors.accent};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

export const DeleteBtn = styled.button`
  width: 108px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  background: ${colors.accent};
  border: none;
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    background-color: #6243ff;
  }

  color: ${colors.white};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;
