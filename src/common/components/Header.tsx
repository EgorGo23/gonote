import React from 'react';
import * as L from '@korus/leda';

export const Header: React.FC = () => (
  <L.Header className="user-box personal-box">
    <L.Nav>
      <L.A href="#" className="txt-large txt-bold">
        <L.Img
          src="https://cdn.esphere.ru/images/booking/logo-sber.svg"
          className="margin-right"
        />
        Test Project
      </L.A>
      <L.Ul className="menu-h company txt-right txt-small right">
        <L.Li className="level-1">
          <L.Span className="dropdown-wrapper">
            <L.Div>
              <L.Div className="txt-bold user">
                Цветкова Иванка Константиновна
              </L.Div>
              <L.Img
                src="https://cdn.esphere.ru/images/nova/icons/check.svg"
                className="align-top"
              />
              <L.Span className="company-name">ООО «Ромашка»</L.Span>
            </L.Div>
          </L.Span>
        </L.Li>
      </L.Ul>
    </L.Nav>
  </L.Header>
);
