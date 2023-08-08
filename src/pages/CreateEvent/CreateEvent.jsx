import { MainContainer } from '../../components/Container/Container';
import { BackLink } from '../../components/BackLink/BackLink';
import { PageTitle } from '../../components/Title/Title';
import { Main, Section } from './CreateEvent.styled';
import { AddForm } from '../../components/AddForm/AddForm';

const CreateEvent = () => {
  return (
    <Main>
      <Section>
        <MainContainer>
          <BackLink />
          <PageTitle>Create new event</PageTitle>
          <AddForm />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default CreateEvent;
