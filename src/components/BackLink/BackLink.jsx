import { LinkBack, BackText } from './BackLink.styled';
import { ReactComponent as BackIcon } from '../../assets/arrow-back.svg';

export const BackLink = () => {
  return (
    <LinkBack to="/">
      <BackIcon />
      <BackText>Back</BackText>
    </LinkBack>
  );
};
