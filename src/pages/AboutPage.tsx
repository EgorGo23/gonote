import React from 'react';
import * as L from '@korus/leda';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => (
  <>
    <L.H1>About page</L.H1>
    <Link to="/">to home page</Link>
  </>
);
