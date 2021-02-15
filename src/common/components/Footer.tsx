import React, { useMemo } from 'react';
import * as L from '@korus/leda';
import moment from 'moment';

import packageData from '@packageSrc';

export const Footer: React.FC = () => {
  const currentYear = useMemo(() => moment().format('YYYY'), []);

  return (
    <L.Div className="wrapper">
      <L.Main className="content-box items margin-y">
        <L.Footer>
          <L.Div className="txt-gray txt-small">
            <L.Div className="right">8 (800) 100-8-812, бесплатно по РФ</L.Div>
            <L.Div>{`© КОРУС Консалтинг СНГ, 2012 — ${currentYear}`}</L.Div>
            Версия приложения:&nbsp;
            {packageData.version}
          </L.Div>
        </L.Footer>
      </L.Main>
    </L.Div>
  );
};
