import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectFilter } from '../../redux/selectors';
import { getAllEvents } from '../../redux/operation';
import { Main, Section } from './MainPage.styled';
import { MainContainer } from '../../components/Container/Container';
import { EventList } from '../../components/EventList/EventList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Buttons } from '../../components/MainPageBtns/Buttons';

const MainPage = () => {
  const [events, setEvents] = useState([]);

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
          <Buttons
            filterByName={filterByName}
            filterByPriority={filterByPriority}
            filterByDate={filterByDate}
            filterByCategory={filterByCategory}
          />
          <EventList events={events} />
          <Pagination />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default MainPage;
