import { MainContainer } from '../../components/Container/Container';
import { BackLink } from '../../components/BackLink/BackLink';
import { PageTitle } from '../../components/Title/Title';
import { Main, Section } from './CreateEvent.styled';
import { EventForm } from '../../components/EventForm/EventForm';

const CreateEvent = () => {
  return (
    <Main>
      <Section>
        <MainContainer>
          <BackLink />
          <PageTitle>Create new event</PageTitle>
          <EventForm />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default CreateEvent;
