import styled from 'styled-components';
import { colors } from '../../vars';

export const Form = styled.form`
  width: 272px;
  height: 100%;
  padding: 40px 16px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 688px;
    padding: 40px 24px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
    padding: 40px 40px 54px;
  }
`;

export const FlexWrap = styled.ul`
  display: grid;
  grid-gap: 20px 0px;

  @media (min-width: 768px) {
    grid-auto-flow: column;
    grid-gap: 20px 24px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-gap: 20px 42px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Flexitem = styled.li`
  width: 240px;
  height: 80px;

  &:nth-child(2) {
    height: 180px;
  }

  @media (min-width: 768px) {
    width: 308px;

    &:nth-child(2) {
      grid-row-end: span 2;
    }
  }

  @media (min-width: 1440px) {
    width: 372px;
  }
`;

export const Label = styled.label`
  color: ${colors.accent};
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.4px;
  display: block;
  margin-bottom: 8px;
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
    stroke: ${props => (props.errorValue ? '#FF2B77' : '#7B61FF')};
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
  border-color: ${props => (props.errorValue ? '#FF2B77' : '#ACA7C3')};
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
`;

export const TextArea = styled.textarea`
  width: 240px;
  height: 156px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  outline: none;
  resize: none;

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
`;

export const InputFIle = styled.input`
  width: 240px;
  height: 56px;
  padding: 16px 12px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1440px) {
    width: 372px;
  }

  &:focus {
    border-color: ${colors.accent};
  }
`;

export const FileWrap = styled.div`
  width: 240px;
  height: 64px;
  background-color: ${colors.white};
  position: relative;

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1440px) {
    width: 372px;
  }
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

  @media (min-width: 768px) {
    width: 298px;
  }
`;

export const FileText = styled.p`
  color: ${colors.text};
  font-size: 16px;
  line-height: 1.5;
`;

export const Button = styled.button`
  display: block;
  width: 240px;
  height: 56px;
  margin-top: 40px;
  background-color: ${colors.accent};
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    background-color: #6243ff;
  }

  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 768px) {
    width: 193px;
    margin-left: auto;
  }

  @media (min-width: 1440px) {
    margin-top: 60px;
  }
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
  border-radius: 8px;

  border: 1px solid
    ${props =>
      props.isCategoriesOpen || props.isPrioritiesOpen ? '#7B61FF' : '#ACA7C3'};
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

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1440px) {
    width: 372px;
  }
`;

export const CategoryOption = styled.li`
  width: 100%;
  height: 56px;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.divider};
  }

  color: ${props => (props.category === props.value ? '#7B61FF' : '#3F3F3F')};
  font-size: 16px;
  line-height: normal;
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
  }
`;

export const PriorityOption = styled.li`
  width: 100%;
  height: 56px;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.divider};
  }

  color: ${props => (props.priority === props.value ? '#7B61FF' : '#3F3F3F')};
  font-size: 16px;
  line-height: normal;
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
  }
`;

export const Error = styled.p`
  width: 75px;
  color: ${colors.high};
  font-size: 12px;
  line-height: 1.33;
  margin: 4px 19px 0 auto;
`;
