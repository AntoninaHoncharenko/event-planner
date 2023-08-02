import { Main, Section, BtnWrap, FilterBtn, PlusBtn } from './MainPage.styled';
import { MainContainer } from '../../components/Container/Container';
import { EventList } from '../../components/EventList/EventList';
import { Pagination } from '../../components/Pagination/Pagination';
import { ReactComponent as Filter1 } from '../../assets/filter1.svg';
import { ReactComponent as Filter2 } from '../../assets/filter2.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const MainPage = () => {
  return (
    <Main>
      <Section>
        <MainContainer>
          <BtnWrap>
            <FilterBtn type="button">
              <Filter1 />
            </FilterBtn>
            <FilterBtn type="button">
              <Filter2 />
            </FilterBtn>
            <PlusBtn to="/create">
              <Plus />
            </PlusBtn>
          </BtnWrap>
          <EventList />
          <Pagination />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default MainPage;
