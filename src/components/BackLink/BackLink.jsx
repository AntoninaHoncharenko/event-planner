import { ReactComponent as BackIcon } from '../../assets/arrow-back.svg';
import { LinkBack, BackText } from './BackLink.styled';

export const BackLink = () => {
  return (
    <LinkBack to="/">
      <BackIcon />
      <BackText>Back</BackText>
    </LinkBack>
  );
};
