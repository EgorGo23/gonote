import React, { ReactNode } from 'react';
import * as L from '@korus/leda';
import { useSelector } from 'react-redux';

import { Header, Footer } from '@common/components';
import { GlobalLoader } from '@features/loading';
import { Notices } from '@features/notices';

import { ErrorLayout, selectors as errorSelectors } from '@features/errors';

type LayoutProp = {
  children: ReactNode | ReactNode[];
};

/**
 * ### Базовый макет страницы
 *
 * @returns {JSX.Element} - Базовый макет страницы
 */
export const MainLayout: React.FC<LayoutProp> = ({ children }) => {
  const errorExist = useSelector(errorSelectors.isErrorExist);

  return (
    <GlobalLoader>
      <Header />
      <L.Div className="wrapper">
        <L.Main className="content-box items margin-y">
          {errorExist ? <ErrorLayout /> : children}
        </L.Main>
      </L.Div>
      <Footer />
      <Notices />
    </GlobalLoader>
  );
};
