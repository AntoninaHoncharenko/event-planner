import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectFilter } from '../../redux/selectors';
import { getAllEvents } from '../../redux/operation';
import { Main, Section, Wrap, Title } from './MainPage.styled';
import { MainContainer } from '../../components/Container/Container';
import { EventList } from '../../components/EventList/EventList';
import { BtnsFilters } from '../../components/BtnsFilters/BtnsFilters';
import { PageTitle } from '../../components/Title/Title';

const MainPage = () => {
  const [events, setEvents] = useState([]);

  const tablet = useMedia('(min-width: 768px) and (max-width: 1339px)', {
    defaultMatches: true,
  });
  const desk = useMedia('(min-width: 1440px)', { defaultState: true });

  const dispatch = useDispatch();
  const allEvents = useSelector(selectEvents);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    setEvents(allEvents);
  }, [allEvents]);

  useEffect(() => {
    const filtered = allEvents.filter(event =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );

    setEvents(filtered);
  }, [allEvents, filter]);

  const filterByName = value => {
    const sortedEvents = [...events];

    if (value === 'increase') {
      sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === 'decrease') {
      sortedEvents.sort((a, b) => b.title.localeCompare(a.title));
    }

    setEvents(sortedEvents);
  };

  const filterByDate = value => {
    const sortedEvents = [...events];

    if (value === 'increase') {
      sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === 'decrease') {
      sortedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setEvents(sortedEvents);
  };

  const filterByPriority = value => {
    const priorityOrder = ['High', 'Medium', 'Low'];
    const sortedEvents = [...events];

    if (value === 'increase') {
      sortedEvents.sort(
        (a, b) =>
          priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority)
      );
    } else if (value === 'decrease') {
      sortedEvents.sort(
        (a, b) =>
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    }

    setEvents(sortedEvents);
  };

  const filterByCategory = value => {
    const filteredEvents = allEvents.filter(event => event.category === value);
    setEvents(filteredEvents);
  };

  return (
    <Main>
      <Section>
        <MainContainer>
          <Wrap>
            {desk && <Title>My events</Title>}
            <BtnsFilters
              filterByName={filterByName}
              filterByPriority={filterByPriority}
              filterByDate={filterByDate}
              filterByCategory={filterByCategory}
            />
          </Wrap>
          {tablet && <PageTitle>My events</PageTitle>}
          <EventList events={events} />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default MainPage;
