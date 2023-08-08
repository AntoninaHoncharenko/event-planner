import { Oval } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Oval
        height={60}
        width={60}
        color="#7B61FF"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ACA7C3"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </LoaderWrap>
  );
};
