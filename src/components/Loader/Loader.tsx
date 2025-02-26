import { memo } from 'react';
import { LoaderContainer, Spinner } from './Loader.styles';

const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export const Loader = memo(LoaderComponent);
