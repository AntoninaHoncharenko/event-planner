import {
  HeaderWrap,
  Title,
  Wrap,
  LangSwitch,
  LangText,
  LangBtn,
  InputWrap,
  Input,
  Label,
} from './Header.styled';
import { MainContainer } from '../Container/Container';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

export const Header = () => {
  return (
    <HeaderWrap>
      <MainContainer>
        <Wrap>
          <Title>Event Planner</Title>
          <LangSwitch>
            <LangText>UK</LangText>
            <LangBtn type="button">
              <ArrowIcon />
            </LangBtn>
          </LangSwitch>
        </Wrap>
        <InputWrap>
          <Label htmlFor="query">
            <SearchIcon />
          </Label>
          <Input type="text" id="query" placeholder="Search by keywords" />
        </InputWrap>
      </MainContainer>
    </HeaderWrap>
  );
};
