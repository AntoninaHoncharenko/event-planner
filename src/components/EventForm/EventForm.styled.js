import styled from 'styled-components';
import { colors } from '../../vars';

export const Form = styled.form`
  width: 272px;
  height: 100%;
  padding: 40px 16px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const Label = styled.label`
  color: ${colors.accent};
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.4px;
  display: block;
  margin-bottom: 8px;
`;

export const InpurWrap = styled.div`
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
  right: 12px;
`;

export const Input = styled.input`
  width: 240px;
  height: 56px;
  padding: 16px 36px 16px 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  outline: none;

  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;

  &:focus {
    border-color: ${colors.accent};
  }
`;

export const TextArea = styled.textarea`
  width: 240px;
  height: 156px;
  padding: 16px 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  outline: none;
  resize: none;

  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;

  &:focus {
    border-color: ${colors.accent};
  }
`;

export const InputFIle = styled.input`
  width: 240px;
  height: 56px;
  padding: 16px 12px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};

  &:focus {
    border-color: ${colors.accent};
  }
`;

export const InputFIleWrap = styled.div`
  width: 240px;
  height: 56px;
  margin-bottom: 28px;
  background-color: ${colors.white};
  position: relative;
`;

export const Wrap = styled.div`
  width: 236px;
  height: 52px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: ${colors.white};
  position: absolute;
  top: 10px;
  left: 2px;
`;

export const FileText = styled.p`
  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;
`;

export const Button = styled.button`
  width: 240px;
  height: 56px;
  margin-top: 40px;
  background-color: ${colors.accent};
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;

  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

export const SelectWrap = styled.div`
  position: relative;
`;

export const FakeLabel = styled.p`
  color: ${colors.accent};
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.4px;
  margin-bottom: 8px;
`;

export const Select = styled.div`
  width: 240px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  margin-bottom: 20px;
  border-radius: 8px;

  border: 1px solid
    ${props =>
      props.isCategoriesOpen || props.isPrioritiesOpen ? '#7B61FF' : '#ACA7C3'};
  outline: none;

  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;
`;

export const SelectText = styled.p`
  color: ${props =>
    props.category === 'Select category' || props.priority === 'Select priority'
      ? '#7B61FF'
      : '#3F3F3F'};
  font-size: 16px;
  line-height: 1.5;
`;

export const OptionsWrap = styled.ul`
  width: 240px;
  padding: 0px 16px;
  border-radius: 8px;
  background: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  position: absolute;
  top: 74px;
  z-index: 3;
`;

export const Option = styled.li`
  width: 100%;
  height: 56px;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.divider};
  }

  color: ${colors.text};
  font-size: 16px;
  line-height: normal;
`;
