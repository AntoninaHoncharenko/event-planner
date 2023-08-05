import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
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
  const dispatch = useDispatch();

  const handleInputChange = e => {
    console.log(e.target.value);
    dispatch(updateFilter(e.target.value));
  };

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
          <InputWrap>
            <Label htmlFor="query">
              <SearchIcon />
            </Label>
            <Input
              type="text"
              id="query"
              placeholder="Search by keywords"
              onChange={handleInputChange}
            />
          </InputWrap>
        </Wrap>
      </MainContainer>
    </HeaderWrap>
  );
};
