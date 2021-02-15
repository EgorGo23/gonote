import React from 'react';
import * as L from '@korus/leda';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => (
  <>
    <L.H1>Home page!!</L.H1>
    <Link to="/about">to about page</Link>
  </>
);
