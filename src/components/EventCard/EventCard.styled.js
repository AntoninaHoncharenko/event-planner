import styled from 'styled-components';
import { colors } from '../../vars';

export const Card = styled.div`
  width: 272px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 168px;
  object-fit: cover;
  object-position: 0% 30%;
`;

export const InfoWrap = styled.div`
  padding: 24px 16px 40px;
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
  width: 139px;
  height: 32px;
  padding: 4px 12px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

  color: ${colors.accent};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EditBtn = styled.button`
  width: 108px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${colors.white};
  border: 1px solid ${colors.accent};

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

  color: ${colors.white};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;
