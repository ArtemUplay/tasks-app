import { memo } from 'react';
import { StyledPageContainerBox } from './PageContainer.styles';
import { PageContainerProps } from './PageContainer.types';

const PageContainerComponent = ({ children }: PageContainerProps) => {
  return <StyledPageContainerBox>{children}</StyledPageContainerBox>;
};

export const PageContainer = memo(PageContainerComponent);
