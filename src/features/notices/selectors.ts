import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';
import { config } from '@common/config';

import { NoticeState } from './ducks';

const noticesSelector = (state: RootState): NoticeState =>
  state[config.modules.notices];

const notices = createSelector(
  noticesSelector,
  (noticesArray): NoticeState => noticesArray,
);

export const selectors = {
  notices,
};
