import { MainContainer } from '../../components/Container/Container';
import { BackLink } from '../../components/BackLink/BackLink';
import { EventCard } from '../../components/EventCard/EventCard';
import { Main, Section } from './EventDetails.styled';

const EventDetails = () => {
  return (
    <Main>
      <Section>
        <MainContainer>
          <BackLink />
          <EventCard />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default EventDetails;
