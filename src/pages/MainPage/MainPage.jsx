import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents } from '../../redux/selectors';
import { getAllEvents } from '../../redux/operation';
import { Main, Section, BtnWrap, FilterBtn, PlusBtn } from './MainPage.styled';
import { MainContainer } from '../../components/Container/Container';
import { EventList } from '../../components/EventList/EventList';
import { Pagination } from '../../components/Pagination/Pagination';
import { ReactComponent as Filter1 } from '../../assets/filter1.svg';
import { ReactComponent as Filter2 } from '../../assets/filter2.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  const events = useSelector(selectEvents);

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
          <EventList events={events} />
          <Pagination />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default MainPage;
