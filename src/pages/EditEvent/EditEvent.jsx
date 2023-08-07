import { Edit } from '../../components/Edit/Edit';
import { MainContainer } from '../../components/Container/Container';
import { PageTitle } from '../../components/Title/Title';
import { Main, Section, BackLink, BackText } from './EditEvent.styled';
import { ReactComponent as BackIcon } from '../../assets/arrow-back.svg';
import { useParams } from 'react-router-dom';

const EditEvent = () => {
  const { eventId } = useParams();

  return (
    <Main>
      <Section>
        <MainContainer>
          <BackLink to={`/${eventId}`}>
            <BackIcon />
            <BackText>Back</BackText>
          </BackLink>
          <PageTitle>Edit event</PageTitle>
          <Edit />
        </MainContainer>
      </Section>
    </Main>
  );
};

export default EditEvent;
